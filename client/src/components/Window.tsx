import { useDispatch } from "react-redux";
import { deactiveApp } from "../contexts/appSlice";
import { type app } from "../types/app";

export const Window = (props: app) => {
    const dispatch = useDispatch<any>();

    const handleClose = (event: any) => {
        event.preventDefault();
        dispatch(deactiveApp(props.entry));
    }

    return (
        <div className="background vista-window">
            <div className="window glass active" style={{width: "1000px", height: "600px"}}>
                <div className="title-bar">
                    <div className="title-bar-text">{props.title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize" disabled></button>
                        <button onClick={handleClose} aria-label="Close"></button>
                    </div>
                </div>

            <div className="window-body has-space" style={{height: "92%"}}>
                    <iframe style={{width: "100%", height: "100%"}} src={props.entry} />
                </div> 
            </div>
        </div>
    );
}