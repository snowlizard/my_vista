import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type PayloadAction} from "@reduxjs/toolkit";
import { type app, type appState } from "../types/app";


const address = "http://localhost:5000";

export const getDesktopApps = createAsyncThunk(
    "apps/desktop",
    async () => {
        const response = await fetch(address + "/desktop/apps");
        const data =  response.json();
        return data;
    }
);

const initialState: appState = {
    desktop: [],
    running: []
}

export const appSlice = createSlice({
    name: "apps",
    initialState,

    reducers: {
        runApp: (state, action : PayloadAction<app>) => {
            let exists = state.running.find( (app: app) => 
                app == action.payload);

            if(!exists){
                let index = action.payload.title + state.running.length;

                let newApp = {...action.payload, open: false, index: index, maximized: false};
                state.running = [...state.running, newApp];
            }
        },

        deactiveApp: (state, action: PayloadAction<string>) => {
            state.running = state.running.filter((app) => app.entry != action.payload);
        },

        resizeMin: (state, action: PayloadAction<app>) => {
            let currentApp = action.payload;
            let element = document.getElementById(currentApp.index);

            if(!currentApp.open){
                element?.classList.add("hideClass");
            } else {
                element?.classList.remove("hideClass");
            }

            state.running = state.running.map( (app: app) => 
            app.index == currentApp.index ? {...app, open: !currentApp.open} : app);
        },

        resizeMax: (state, action: PayloadAction<app>) => {
            let currentApp = action.payload;
            let element = document.getElementById(currentApp.index);
            let desktop = document.getElementById("desktop");

            if(!currentApp.maximized){
                let targetHeight = desktop?.offsetHeight! - 35;
                element?.setAttribute("style", "top: 0; left: 0; width: 100%; height: " + targetHeight + "px");
            } else {
                element?.setAttribute("style", "top: 10%; left: 15%; width: 75%; height: 80%");
            }

            state.running = state.running.map( (app: app) => 
            app.index == currentApp.index ? {...app, maximized: !currentApp.maximized} : app);
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getDesktopApps.fulfilled, (state, action) => {
            state.desktop = action.payload;
        })
    }
});

export const { runApp, deactiveApp, resizeMin, resizeMax } = appSlice.actions;
export default appSlice.reducer;