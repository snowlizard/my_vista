import Draggable from 'react-draggable';
import { useRef, type MouseEvent } from 'react';
import { useDispatch } from "react-redux";
import { setCurrentApp, deactiveApp, resizeMin, resizeMax } from "../contexts/appSlice";
import { type app } from "../types/app";

export const Window = (props: app) => {
    const nodeRef = useRef(null);
    const dispatch = useDispatch<any>();

    const updateCurrent = () => {
        dispatch(setCurrentApp(props));
    }

    const onResizeMin = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(resizeMin(props))
    }

    const onResizeMax = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(resizeMax(props))
    }

    const onClose = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(deactiveApp(props.entry))
    }

    return (
        <Draggable nodeRef={nodeRef} bounds="parent" handle='.title-bar'>
            <div className="background vista-window" id={props.index} ref={nodeRef}
                style={{zIndex: props.zIndex}} onClick={updateCurrent}>
                <div className="window glass active">
                    <div className="title-bar">
                        <div className="title-bar-text">{props.title}</div>
                        <div className="title-bar-controls">
                            <button onClick={onResizeMin} aria-label="Minimize"></button>
                            <button onClick={onResizeMax} aria-label="Maximize"></button>
                            <button onClick={onClose} aria-label="Close"></button>
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