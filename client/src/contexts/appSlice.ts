import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type PayloadAction} from "@reduxjs/toolkit";
import { type windowProps } from "../components/Window";
import type { desktopApp } from "../components/desktopApp";

const address = "http://localhost:5000";

export const getDesktopApps = createAsyncThunk(
    "apps/desktop",
    async () => {
        const response = await fetch(address + "/desktop/apps");
        const data =  response.json();
        return data;
    }
);

interface appState {
    desktop: Array<desktopApp>,
    running: Array<windowProps>
}

const initialState: appState = {
    desktop: [],
    running: []
}

export const appSlice = createSlice({
    name: "apps",
    initialState,

    reducers: {
        runApp: (state, action : PayloadAction<windowProps>) => {
            let exists = state.running.find( (app: windowProps) => 
                app.contextID == action.payload.contextID);

            if(!exists){
                state.running = [...state.running, action.payload];
            }
        },

        deactiveApp: (state, action: PayloadAction<string>) => {
            state.running = state.running.filter((app) => app.contextID != action.payload);
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getDesktopApps.fulfilled, (state, action) => {
            state.desktop = action.payload;
        })
    }
});

export const { runApp, deactiveApp } = appSlice.actions;
export default appSlice.reducer;