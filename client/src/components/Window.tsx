import { useDispatch } from "react-redux";
import { deactiveApp } from "../contexts/appSlice";

export interface windowProps {
    title: string,
    path: string,
    contextID: string
}

export const Window = (props: windowProps) => {
    const dispatch = useDispatch<any>();
    const windowID = props.contextID;

    const handleClose = (event: any) => {
        event.preventDefault();
        dispatch(deactiveApp(windowID));
    }

    return (
        <div className="background vista-window">
            <div id={windowID} className="window glass active" style={{width: "1000px", height: "600px"}}>
                <div className="title-bar">
                    <div className="title-bar-text">{props.title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize" disabled></button>
                        <button onClick={handleClose} aria-label="Close"></button>
                    </div>
                </div>

            <div className="window-body has-space" style={{height: "92%"}}>
                    <iframe style={{width: "100%", height: "100%"}} src={props.path} />
                </div> 
            </div>
        </div>
    );
}