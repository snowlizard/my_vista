import { useDispatch } from "react-redux";
import { runApp } from "../contexts/appSlice";
import { type windowProps } from "./Window";

export interface desktopApp {
    title: string,
    icon: string,
    entry: string
}

export const DesktopApp = (props: desktopApp) => {
    const dispatch = useDispatch<any>();

    const launchApp = () => {
        const app: windowProps = {
            title: props.title,
            path: props.entry,
            contextID: "0"
        }
        dispatch(runApp(app));
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