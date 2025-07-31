import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Taskbar } from "./taskbar";
import { getDesktopApps } from "../contexts/appSlice";
 
export const Desktop = () => {
    const wallpaper = useSelector((state: any) => state.theme.wallpaper);
    const desktopApps = useSelector((state: any) => state.app.desktop);

    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getDesktopApps());
    }, [dispatch]);

    return (
        <div id="desktop"
        style={{ backgroundImage: "url(" + wallpaper + ")" }}>
            {
                JSON.stringify(desktopApps)
            }
            
            <Taskbar />
        </div>
    );
}