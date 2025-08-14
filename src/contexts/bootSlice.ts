import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction} from "@reduxjs/toolkit";

const bootSlice = createSlice({
    name: "bootState",
    initialState: { value: true },

    reducers: {
        setBoot: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    }
});

export const { setBoot } = bootSlice.actions;
export default bootSlice.reducer;