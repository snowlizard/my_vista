import Draggable from 'react-draggable';
import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { deactiveApp, resizeMin, resizeMax } from "../contexts/appSlice";
import { type app } from "../types/app";

export const Window = (props: app) => {
    const nodeRef = useRef(null);
    const dispatch = useDispatch<any>();

    const handleClose = (event: any) => {
        event.preventDefault();
        dispatch(deactiveApp(props.entry));
    }

    const minimize = () => {
        dispatch(resizeMin(props));
    }

    const maximize = () => {
        dispatch(resizeMax(props));
    }

    return (
        <Draggable nodeRef={nodeRef}>
            <div className="background vista-window" id={props.index} ref={nodeRef}>
                <div className="window glass active">
                    <div className="title-bar">
                        <div className="title-bar-text">{props.title}</div>
                        <div className="title-bar-controls">
                            <button onClick={minimize} aria-label="Minimize"></button>
                            <button onClick={maximize} aria-label="Maximize"></button>
                            <button onClick={handleClose} aria-label="Close"></button>
                        </div>
                    </div>

                <div className="window-body has-space" style={{height: "95%"}}>
                        <embed style={{width: "100%", height: "100%"}} src={props.entry} />
                    </div> 
                </div>
            </div>
        </Draggable>
    );
}