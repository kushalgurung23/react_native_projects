import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ApiTodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface ApiTodoState {
    isLoading: boolean,
    data: ApiTodo[] | null,
    isError: boolean
}

const initialState:ApiTodoState = 
    {
        isLoading: false,
        data: null,
        isError: false
    }

// ACTION
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const jsonResponse = await response.json()
    console.log(jsonResponse);
    
    return jsonResponse;
})

export const apiTodoSlice = createSlice({
    name: "apiTodo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isError = false;
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export default apiTodoSlice.reducer