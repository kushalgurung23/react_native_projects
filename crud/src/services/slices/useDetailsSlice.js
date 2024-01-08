
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserRepo from "../repo/usersRepo";

const initialState = {
    users: [],
    isLoading: false,
    isError: null
}

export const createUser = createAsyncThunk('createUser', async (data, {rejectWithValue}) => {
    try {
        const response = await UserRepo.createUser({data, rejectWithValue})
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.log('from thunk');
        return rejectWithValue(error)
    }
})

export const readUser = createAsyncThunk('readUser', async (data, {rejectWithValue}) => {
    try {
        const response = await UserRepo.readUser({rejectWithValue})
        const result = await response.json()
        console.log(result);
        return result;
    }
    catch(error) {
        return rejectWithValue(error)
    }
})

export const userDetails = createSlice({
    name: 'userDetails',
    initialState,
    extraReducers: (builder) => {
        // CREATE USER REDUCERS
        builder.addCase(createUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.users.push(action.payload)
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.users.length = 0;
        })

        // READ USER REDUCERS
        builder.addCase(readUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(readUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.users = action.payload
        })
        builder.addCase(readUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.users.length = 0;
        })
    }
})

export default userDetails.reducer
