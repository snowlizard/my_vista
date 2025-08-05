import { useDispatch } from "react-redux";
import { deactiveApp, hideApp } from "../contexts/appSlice";
import { type app } from "../types/app";

export const Window = (props: app) => {
    const dispatch = useDispatch<any>();

    const handleClose = (event: any) => {
        event.preventDefault();
        dispatch(deactiveApp(props.entry));
    }

    const minimize = () => {
        dispatch(hideApp(props));
    }

    return (
        <div className="background vista-window" id={props.index}>
            <div className="window glass active">
                <div className="title-bar">
                    <div className="title-bar-text">{props.title}</div>
                    <div className="title-bar-controls">
                        <button onClick={minimize} aria-label="Minimize"></button>
                        <button aria-label="Maximize" disabled></button>
                        <button onClick={handleClose} aria-label="Close"></button>
                    </div>
                </div>

            <div className="window-body has-space" style={{height: "92%"}}>
                    <embed style={{width: "100%", height: "100%"}} src={props.entry} />
                </div> 
            </div>
        </div>
    );
}