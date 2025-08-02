import { useSelector } from "react-redux";

export const Taskbar = () => {
    const activeApps = useSelector((state: any) => state.app.running);

    return (
        <>
            <div id="start_orb"></div>            
            <div id="taskbar">
                <div style={{background: "green", width: "100px"}}>
                    <span>Pokedex</span>
                </div>
            </div>
        </>
    );
}