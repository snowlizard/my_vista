import { ClickAwayListener } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { menuState } from "../contexts/startmenuSlice";

export const Startmenu = () => {
    const dispatch = useDispatch<any>();

    return (
        <ClickAwayListener onClickAway={() => dispatch(menuState())}>
            <div className='startMenu' id='start_menu'>
                <LeftColumn />
                <RightColumn />
            </div>
        </ClickAwayListener>
    );
}

const LeftColumn = () => {
    return (
        <div className="left-column">
            <div className="left-wrapper">
                <div className="programContainer">
                    <div className="pinnedApps">

                    </div>
                </div>

                <input id="startmenu-search" type="search" placeholder="Search" />
            </div>
        </div>
    );
}


const RightColumn = () => {
    const userIcon = useSelector((state: any) => state.theme.userIcon);
    const folders = ["Documents", "Pictures", "Music", "Videos"];
    const systemApps = ["Control Panel", "Default Programs", "Help and Support"];

    return (
        <div id='right-column'>
            <div id='frame-container'>
                <img className='userFrame' src="/assets/ui/userframe.ico"></img>
                <img id='userPic' src={userIcon}></img>
            </div>

            <div className="startmenu-folders">
                <div className="folder-container">
                    <span>Snowlizard</span>
                </div>

                {
                    folders.map((folder) => (
                        <div className="folder-container">
                            <span>{folder}</span>
                        </div>
                    ))
                }
                <div className="divider"></div>
                {
                    systemApps.map((sysApp) => (
                        <div className="folder-container">
                            <span>{sysApp}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}