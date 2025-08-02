import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Taskbar } from "./taskbar";
import { DesktopApp, type desktopApp } from "./desktopApp";
import { getDesktopApps } from "../contexts/appSlice";
import { Window } from "./Window";
import type { windowProps } from "./Window";
 
export const Desktop = () => {
    const wallpaper = useSelector((state: any) => state.theme.wallpaper);
    const desktopApps = useSelector((state: any) => state.app.desktop);
    const activeApps = useSelector((state: any) => state.app.running);

    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getDesktopApps());
    }, [dispatch]);

    return (
        <div id="desktop"
        style={{ backgroundImage: "url(" + wallpaper + ")" }}>
            {
                desktopApps.map( (app: desktopApp) =>
                <DesktopApp key={app.title} title={app.title} icon={app.icon} entry={app.entry}/> )
            }
            {
                activeApps == null ? "" :
                activeApps.map( (app: windowProps) => 
                <Window key={app.contextID} title={app.title} path={app.path} contextID={app.contextID} />)
            }
            <Taskbar />
        </div>
    );
}