interface windowProps {
    title: string,
    path: string,
    contextID: string
}

export const Window = (props: windowProps) => {

    return (
        <div className="background">
            <div className="window glass active" style={{width: "1000px", height: "600px"}}>
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