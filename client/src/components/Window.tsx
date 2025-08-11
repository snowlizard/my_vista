import Draggable from 'react-draggable';
import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { setCurrentApp, deactiveApp, resizeMin, resizeMax } from "../contexts/appSlice";
import { type app } from "../types/app";

export const Window = (props: app) => {
    const nodeRef = useRef(null);
    const dispatch = useDispatch<any>();


    return (
        <Draggable nodeRef={nodeRef}>
            <div className="background vista-window" id={props.index} ref={nodeRef}
                style={{zIndex: props.zIndex}}
                onClick={() => dispatch(setCurrentApp(props))} >
                <div className="window glass active">
                    <div className="title-bar">
                        <div className="title-bar-text">{props.title}</div>
                        <div className="title-bar-controls">
                            <button onClick={() => dispatch(resizeMin(props))} aria-label="Minimize"></button>
                            <button onClick={() => dispatch(resizeMax(props))} aria-label="Maximize"></button>
                            <button onClick={() => dispatch(deactiveApp(props.entry))} aria-label="Close"></button>
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