import { useSelector } from "react-redux";

export const Desktop = () => {
    const wallpaper = useSelector((state: any) => state.theme.wallpaper);

    return (
        <div id="desktop"
        style={{ backgroundImage: "url(" + wallpaper + ")" }}>
            Hello world
        </div>
    );
}