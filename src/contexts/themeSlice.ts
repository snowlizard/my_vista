import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type PayloadAction} from "@reduxjs/toolkit";

export const getTheme = createAsyncThunk(
    "os/theme",
    async () => {
        const response = await fetch("/theme.json");
        const data =  response.json();
        return data;
    }
);

const themeSlice = createSlice({
    name: "bootState",
    initialState: {
        wallpaper: "/assets/ui/xp_bg.png",
        username: "",
        userIcon: "",
    },

    reducers: {
        setWallpaper: (state: any, action: PayloadAction<string>) => {
            state.wallpaper = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getTheme.fulfilled, (state, action) => {
            state.wallpaper = action.payload.wallpaper;
            state.username = action.payload.username;
            state.userIcon = action.payload.userIcon;
        });
    }
});

export const { setWallpaper } = themeSlice.actions;
export default themeSlice.reducer;