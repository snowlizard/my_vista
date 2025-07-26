import { useSelector } from "react-redux";
import { Taskbar } from "./taskbar";
import { Window } from "./Window";

 
export const Desktop = () => {
    const wallpaper = useSelector((state: any) => state.theme.wallpaper);

    return (
        <div id="desktop"
        style={{ backgroundImage: "url(" + wallpaper + ")" }}>
            <Window title="Pokedex" path="/C:/Users/Snowlizard/Desktop/Pokedex/Pokedex.html" contextID="undadfh" />
            <Taskbar />
        </div>
    );
}