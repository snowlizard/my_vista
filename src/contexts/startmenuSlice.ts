import { createSlice } from "@reduxjs/toolkit";

const startmenuSlice = createSlice({
    name: "bootState",
    initialState: { value: false },

    reducers: {
        menuState: (state) => {
            state.value = !state.value;
        },
    }
});

export const { menuState } = startmenuSlice.actions;
export default startmenuSlice.reducer;