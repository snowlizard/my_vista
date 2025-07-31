import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const address = "http://192.168.1.72:5000";

export const getDesktopApps = createAsyncThunk(
    "apps/desktop",
    async () => {
        const response = await fetch(address + "/desktop/apps");
        const data =  response.json();
        return data;
    }
);

export const appSlice = createSlice({
    name: "apps",
    initialState: {
        desktop: []
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getDesktopApps.fulfilled, (state, action) => {
            state.desktop = action.payload;
        })
    }
});

export const {} = appSlice.actions;
export default appSlice.reducer;