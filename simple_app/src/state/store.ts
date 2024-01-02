import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice';
import apiTodoReducer from '../features/todo/apiTodoSlice';
export const store = configureStore({
    reducer: {
        todo: todoReducer,
        apiTodo: apiTodoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
