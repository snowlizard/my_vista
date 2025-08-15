import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type PayloadAction} from "@reduxjs/toolkit";
import { type app, type appState } from "../types/app";

export const getApps = createAsyncThunk(
    "apps/desktop",
    async () => {
        const response = await fetch("/apps.json");
        const data =  response.json();
        return data;
    }
);

const initialState: appState = {
    desktop: [],
    running: [],
    currentApp: null,
    all: [],
    pinned: []
}

export const appSlice = createSlice({
    name: "apps",
    initialState,

    reducers: {
        runApp: (state, action : PayloadAction<app>) => {
            if(action.payload.type === "external") {
                window.open(action.payload.entry, "_blank", "noopener")
                return;
            }

            let exists = state.running.find( (app: app) => 
                app.entry == action.payload.entry ? app : null);

            if(!exists){
                let index = action.payload.title + state.running.length;

                let newApp = {...action.payload, hidden: false, index: index,
                    maximized: false, zIndex: getHighestZIndex(state.running)};
                state.running = [...state.running, newApp];
            }
        },

        deactiveApp: (state, action: PayloadAction<string>) => {
            state.running = state.running.filter((app) => app.entry != action.payload);
        },

        resizeMin: (state, action: PayloadAction<app>) => {
            let currentApp = action.payload;
            let element = document.getElementById(currentApp.index);

            state.running = state.running.map( (app: app) => 
            app.index == currentApp.index ? {...app, hidden: !currentApp.hidden} : app);

            if(!currentApp.hidden){
                element?.classList.add("hideClass");
            } else {
                element?.classList.remove("hideClass");
            }
        },

        resizeMax: (state, action: PayloadAction<app>) => {
            let currentApp = action.payload;
            let element = document.getElementById(currentApp.index);
            let desktop = document.getElementById("desktop");

            state.running = state.running.map( (app: app) =>
            app.index == currentApp.index ? {...currentApp, maximized: !app.maximized} : app);

            if(!currentApp.maximized){
                let targetHeight = desktop?.offsetHeight! - 35;
                element?.setAttribute("style", "top: 0; left: 0; width: 100%; height: " + targetHeight + "px");
            } else {
                element?.setAttribute("style", "top: 10%; left: 15%; width: 75%; height: 80%");
            }
        },

        setCurrentApp: (state, action: PayloadAction<app>) => {
            state.currentApp = {...action.payload, zIndex: getHighestZIndex(state.running)};
            state.running = state.running.map((target: app) =>
                target.index === state.currentApp?.index ? state.currentApp : {...target, zIndex: target.zIndex++});
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getApps.fulfilled, (state, action) => {
            state.desktop = action.payload.filter((dapp: any) => dapp.location.desktop === true);
            state.pinned = action.payload.filter((dapp: any) => dapp.location.pinned === true);
            state.all = action.payload;
        })
    }
});


const getHighestZIndex = (appList: Array<app>) => {
    return appList.reduce((accumulator, appTwo) => Math.max(accumulator, appTwo.zIndex), 0) + 1;
}

export const { runApp, setCurrentApp, deactiveApp, resizeMin, resizeMax } = appSlice.actions;
export default appSlice.reducer;