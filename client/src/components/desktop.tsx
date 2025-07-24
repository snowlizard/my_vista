import { useSelector } from "react-redux";
import { Taskbar } from "./taskbar";

export const Desktop = () => {
    const wallpaper = useSelector((state: any) => state.theme.wallpaper);

    return (
        <div id="desktop"
        style={{ backgroundImage: "url(" + wallpaper + ")" }}>
            <Taskbar />
        </div>
    );
}