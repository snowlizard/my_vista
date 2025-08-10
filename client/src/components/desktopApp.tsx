import { useDispatch } from "react-redux";
import { runApp, setCurrentApp } from "../contexts/appSlice";
import { type app } from "../types/app";

export const DesktopApp = (props: app) => {
    const dispatch = useDispatch<any>();

    const launchApp = () => {
        dispatch(runApp(props));
        dispatch(setCurrentApp(props));
    }

    return (
        <div className="desktopApp" onClick={ launchApp }>
            <div className="iconWrapper">
                <img src={props.icon} />
            </div>
            <span className="desktopAppTitle">{props.title}</span>
        </div>
    );
}