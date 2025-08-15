import { ClickAwayListener } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuState } from "../contexts/startmenuSlice";
import { runApp, setCurrentApp } from "../contexts/appSlice";
import type { app } from "../types/app";

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
    const [toggleText, setToggleText] = useState("All Programs");
    const pinnedApps = useSelector((state: any) => state.app.pinned);
    const allApps = useSelector((state: any) => state.app.all);

    const [currentList, setCurrentList] = useState(pinnedApps);

    const updateList = () => {
        if(toggleText === "All Programs"){
            setToggleText("Back");
            setCurrentList(allApps);
        } else {
            setToggleText("All Programs");
            setCurrentList(pinnedApps);
        }
    }


    return (
        <div className="left-column">
            <div className="left-wrapper">
                <div className="programContainer">
                    <div className="listWrapper">
                        <Applist applist={currentList} />
                    </div>

                    <div className="listToggleContainer">
                        <span className="toggleDivider"></span>
                        <div className="toggleBtn" onClick={updateList}>
                            <span className="toggleText">
                                <svg id="toggleArrow" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                                {toggleText}
                            </span>
                        </div>
                    </div>
                </div>
                <input id="startmenu-search" type="search" placeholder="Search" />
            </div>
        </div>
    );
}

const Applist = (props: any) => {
    const dispatch = useDispatch<any>();

    const launchApp = (targetApp: app) => {
        dispatch(runApp(targetApp));
        dispatch(setCurrentApp(targetApp));
    }

    return (
        <div className="applistContainer">
            {
                props.applist.map((targetApp: app) =>
                    <div className="pinnedApp" onClick={() => launchApp(targetApp)} key={targetApp.index}>
                        <div className="pinnedAppIconWrapper">
                            <img src={targetApp.icon} className="pinnedAppIcon" />
                        </div>
                        <span className="pinnedAppTitle">{targetApp.title}</span>
                    </div>          
                )
            }
        </div>
    );
}


const RightColumn = () => {
    const username = useSelector((state: any) => state.theme.username);
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
                    <span>{username}</span>
                </div>

                {
                    folders.map((folder) => (
                        <div className="folder-container" key={folder}>
                            <span>{folder}</span>
                        </div>
                    ))
                }
                <div className="divider"></div>
                {
                    systemApps.map((sysApp) => (
                        <div className="folder-container" key={sysApp}>
                            <span>{sysApp}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}