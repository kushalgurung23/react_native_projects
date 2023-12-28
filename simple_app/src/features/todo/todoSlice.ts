import { createSlice } from "@reduxjs/toolkit";

interface Todo {
    id: number,
    text: string
}

interface TodoState {
    todos: Todo[]
}

const initialState:TodoState = {
    todos: [
        {
            id: 1,
            text: "Wash face"
        }
    ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: state.todos.length+1,
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

// exporting addTodo and removeTodo from todoSlice.actions
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer