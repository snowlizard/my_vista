import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "bootState",
    initialState: {
        wallpaper: "/wallpapers/vista_aero.png"
    },

    reducers: {
        setWallpaper: (state, action: PayloadAction<string>) => {
            state.wallpaper = action.payload;
        },
    }
});

export const { setWallpaper } = themeSlice.actions;
export default themeSlice.reducer;