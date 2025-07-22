import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const address = "http://192.168.1.72:5000";

export const getUsers = createAsyncThunk(
    "users/get",
    async (temp, thunkAPI) => {
        try {
            const response = await fetch(address + "/users");
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        users: [],
        user: {},
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }
})