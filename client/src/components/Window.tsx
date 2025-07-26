import { useEffect } from "react"

interface windowProps {
    title: string,
    path: string,
    contextID: string
}

export const Window = (props: windowProps) => {
    const windowID = props.contextID;

    useEffect(() => {
        dragWindow(document.getElementById(windowID)!);
    }, [windowID]);

    return (
        <div className="background">
            <div id={windowID} className="window glass active" style={{width: "1000px", height: "600px"}}>
                <div className="title-bar">
                    <div className="title-bar-text">{props.title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize" disabled></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>

            <div className="window-body has-space" style={{height: "92%"}}>
                    <iframe style={{width: "100%", height: "100%"}} src={props.path} />
                </div> 
            </div>
        </div>
    );
}

const dragWindow = (element: HTMLElement) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e: MouseEvent) => {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;    
    }

    const elementDrag = (e: MouseEvent) => {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    if(document.getElementById(element.id)){
        document.getElementById(element.id)!.onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }
}