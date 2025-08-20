// // src/redux/todoThunk.js
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// const API_URL = import.meta.env.VITE_API_URL;
// console.log("ye api url he ",API_URL )

// // ✅ GET Todos
// // const token = localStorage.getItem("token") 
// export const fetchTodos = createAsyncThunk("/get", async () => {
//   const token = localStorage.getItem("token"); // yahan uthao
//   console.log("this is token",token)
//   const res = await axios.get(`${API_URL}/all`, {
//     headers: {
//       "Authorization": `Bearer ${token}`,
//     },
//   });
//   return res.data;
// });


// // ✅ POST Todo
// export const addTodo = createAsyncThunk("post", async (todoData) => {
//   const res = await axios.post(`${API_URL}/`, todoData);
//   return res.data;
// });

// // ✅ UPDATE Todo
// export const updateTodo = createAsyncThunk("todo/updateTodo", async ({ id, data }) => {
//   const res = await axios.patch(`${API_URL}/update/${id}`, data);
//   return res.data;
// });



// // ✅ DELETE Todo
// export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
//   await axios.delete(`${API_URL}/delete/${id}`);
//   return id;
// });













// src/redux/todoThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
console.log("ye api url he ", API_URL);

// ✅ GET Todos
export const fetchTodos = createAsyncThunk("/get", async () => {
  const token = localStorage.getItem("token"); // har request pe uthao
  console.log("this is token", token);
  const res = await axios.get(`${API_URL}/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
});

// ✅ POST Todo
export const addTodo = createAsyncThunk("post", async (todoData) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${API_URL}/`, todoData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
});

// ✅ UPDATE Todo
export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, data }) => {
    const token = localStorage.getItem("token");
    const res = await axios.patch(`${API_URL}/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

// ✅ DELETE Todo
export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  const token = localStorage.getItem("token");
  await axios.delete(`${API_URL}/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return id;
});
