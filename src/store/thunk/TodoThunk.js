// src/redux/todoThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api/todo";

// ✅ GET Todos
export const fetchTodos = createAsyncThunk("/get", async () => {
  const res = await axios.get(`${API_URL}/all`);
  return res.data;
});

// ✅ POST Todo
export const addTodo = createAsyncThunk("post", async (todoData) => {
  const res = await axios.post(`${API_URL}/`, todoData);
  return res.data;
});

// ✅ UPDATE Todo
export const updateTodo = createAsyncThunk("todo/updateTodo", async ({ id, data }) => {
  const res = await axios.patch(`${API_URL}/update/${id}`, data);
  return res.data;
});



// ✅ DELETE Todo
export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  await axios.delete(`${API_URL}/delete/${id}`);
  return id;
});
