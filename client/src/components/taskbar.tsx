import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { menuState } from "../contexts/startmenuSlice";
import { resizeMin } from "../contexts/appSlice";
import { type app } from "../types/app";

export const Taskbar = () => {
    const activeApps = useSelector((state: any) => state.app.running);
    const dispatch = useDispatch<any>();

    return (
        <div id="taskbar">
            <div id="start_orb" onClick={() => dispatch(menuState())} ></div>   
            <div className="orbspacer"></div>
            <div className="tileContainer">
                {
                    activeApps == null ? "" :
                    activeApps.map( (app: app) => <AppTile key={app.index} {...app} />)
                }
            </div>
            <Systemtray />
        </div>
    );
}

const AppTile = (props: app) => {
    const activeApps = useSelector((state: any) => state.app.running);
    const dispatch = useDispatch<any>();
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

const Systemtray = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString().replace(/\:\d{2}\s/, " "));

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString().replace(/\:\d{2}\s/, " "));
        }, 50000);
    }, []);

    return (
        <div className="systemtray">
            <div className="systemclock">{time}</div>
        </div>
    );
}