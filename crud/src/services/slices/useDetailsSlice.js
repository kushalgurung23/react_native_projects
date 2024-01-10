
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserRepo from "../repo/usersRepo";

const initialState = {
    users: [],
    isLoading: false,
    isError: null,
    searchUserData: []
}

export const createUser = createAsyncThunk('createUser', async (data, {rejectWithValue}) => {
    try {
        const response = await UserRepo.createUser({data, rejectWithValue})
        const result = await response.json();
        return result;
    }
    catch (error) {
        return rejectWithValue(error)
    }
})

export const readUser = createAsyncThunk('readUser', async (data, {rejectWithValue}) => {
    try {
        const response = await UserRepo.readUser({rejectWithValue})
        const result = await response.json()
        return result;
    }
    catch(error) {
        return rejectWithValue(error)
    }
})

export const deleteUser = createAsyncThunk('deleteUser', async (data, {rejectWithValue}) => {
    try {
        const response = await UserRepo.deleteUser({id: data, rejectWithValue})
        const result = await response.json()
        return result;
    }
    catch(error) {
        return rejectWithValue(error)
    }
})

export const updateUser = createAsyncThunk('updateUser', async (data, {rejectWithValue}) => {
    try {
        const response = await UserRepo.updateUser({data, rejectWithValue})
        const result = await response.json();
        return result;
    }
    catch (error) {
        return rejectWithValue(error)
    }
})

export const userDetails = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        searchUser: (state, action) => {
            state.searchUserData = action.payload
            console.log(`search data is ${state.searchUserData}`);
        }
    },
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

        // DELETE USER REDUCERS
        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            // console.log(`action is ${JSON.stringify(action)}`);
            // {"type":"deleteUser/fulfilled","payload":{"name":"A","email":"B","age":"2","gender":"M","id":"14"},"meta":{"arg":"14","requestId":"szxHad22At8LJ-wFnCXIj","requestStatus":"fulfilled"}}
            const {id} = action.payload
            if(!id) {
                return;
            }
            state.users = state.users.filter((user) => user.id !== id)
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })

        // UPDATE USER REDUCERS
        builder.addCase(updateUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            console.log('from payload');
            console.log(action.payload);
            state.isLoading = false;
            state.isError = false;
            state.users = state.users.map((user) => (
                user.id === action.payload.id ? action.payload : user
            ))
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export default userDetails.reducer
export const {searchUser} = userDetails.actions;
