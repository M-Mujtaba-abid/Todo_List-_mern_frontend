// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../store/slice/TodoSlice";
import authReducer from "../store/slice/AuthSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
     auth: authReducer,
  },
});
