import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const address = "http://192.168.1.72:5000";

export const getUsers = createAsyncThunk(
    "users/get",
    async (temp, thunkAPI) => {
        try {
            const response = await fetch(address + "/users");
            const data =  response.json();
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const validLogin = createAsyncThunk(
    "users/login",
    async (user: any, thunkAPI) => {
        try {
            const response = await fetch(address + "/user/" + user.username + "/" + user.passwd);
            const valid = await response.json();
            return valid;
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
        valid: false
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        }),

        builder.addCase(validLogin.fulfilled, (state, action) =>{
            state.valid = action.payload;
        })
    }
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;