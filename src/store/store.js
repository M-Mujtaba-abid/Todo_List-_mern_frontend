// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../store/slice/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
