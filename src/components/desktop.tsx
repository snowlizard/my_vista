import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { DesktopApp } from "./desktopApp";
import { getDesktopApps } from "../contexts/appSlice";
import { getTheme } from "../contexts/themeSlice";
import { Window } from "./Window";
import { type app } from "../types/app";
import { Startmenu } from "./startmenu";
 
export const Desktop = () => {
    const wallpaper = useSelector((state: any) => state.theme.wallpaper);
    const desktopApps = useSelector((state: any) => state.app.desktop);
    const activeApps = useSelector((state: any) => state.app.running);
    const startmenu = useSelector((state: any) => state.startmenu.value);

    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getDesktopApps());
        dispatch(getTheme());
    }, [dispatch]);

    return (
        <div id="desktop"
        style={{ backgroundImage: "url(" + wallpaper + ")" }}>
            <div className="desktopAppContainer">
            {
                desktopApps.map( (app: app) =>
                <DesktopApp key={app.index} {...app} /> )
            }
            </div>
            {
                activeApps == null ? "" :
                activeApps.map( (app: app) => 
                <Window key={app.index} {...app} />)
            }
            {
                startmenu ? <Startmenu /> : ""
            }
        </div>
    );
}