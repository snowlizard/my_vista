import { useSelector } from "react-redux";
import { type app } from "../types/app";

export const Taskbar = () => {
    const activeApps = useSelector((state: any) => state.app.running);

    const AppTile = (props: app) => (
        <div className="appTile">
            <div className="tileIcon">
                <img src={props.icon} />
            </div>
            <span className="tileTitle">{props.title}</span>
        </div>
    );

    return (
        <div id="taskbar">
            <div id="start_orb"></div>   
            <div className="orbspacer"></div>
            <div className="tileContainer">
                {
                    activeApps == null ? "" :
                    activeApps.map( (app: app) => <AppTile {...app} />)
                }
            </div>
            <div className="systemtray">

            </div>
        </div>
    );
}