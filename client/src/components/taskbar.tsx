import { useSelector, useDispatch } from "react-redux";
import { resizeMin } from "../contexts/appSlice";
import { type app } from "../types/app";

export const Taskbar = () => {
    const activeApps = useSelector((state: any) => state.app.running);
    const dispatch = useDispatch<any>();

    const AppTile = (props: app) => {

        const highestZ = activeApps.reduce((accumulator: any, appTwo: app) => Math.max(accumulator, appTwo.zIndex), 0);
        const appZ = activeApps.filter((targetApp: app) => targetApp.zIndex === highestZ);
        
        let tileClasses = "appTile";
        if(appZ[0].index === props.index && !props.hidden){
            tileClasses += " appActive"
        }

        return (
            <div className={tileClasses} id={`appTile-${props.index}`}
                onClick={() => dispatch(resizeMin(props))}>
                <div className="tileIcon">
                    <img src={props.icon} />
                </div>
                <span className="tileTitle">{props.title}</span>
            </div>
        );
    }

    return (
        <div id="taskbar">
            <div id="start_orb"></div>   
            <div className="orbspacer"></div>
            <div className="tileContainer">
                {
                    activeApps == null ? "" :
                    activeApps.map( (app: app) => <AppTile key={app.index} {...app} />)
                }
            </div>
            <div className="systemtray">

            </div>
        </div>
    );
}