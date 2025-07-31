export interface desktopApp {
    title: string,
    icon: string,
    entry: string
}

export const DesktopApp = (props: desktopApp) => {

    return (
        <div className="desktopApp">
            <div className="iconWrapper">
                <img src={props.icon} />
            </div>
            <span className="desktopAppTitle">{props.title}</span>
        </div>
    );
}