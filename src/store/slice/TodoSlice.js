// src/redux/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../thunk/TodoThunk";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // POST
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })

      // UPDATE
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((t) => t._id === action.payload._id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((t) => t._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
