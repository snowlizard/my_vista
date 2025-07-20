import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction} from "@reduxjs/toolkit";

export const bootState = createSlice({
    name: "boot_state",
    initialState: false,

    reducers: {
        bootComplete: (state, action: PayloadAction<boolean>) => {
            state = action.payload;
        },
    }
});