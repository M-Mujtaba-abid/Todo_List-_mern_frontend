// src/redux/auth/authThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await API_URL.post("/user/register", userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Signup failed");
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await API_URL.post("/user/login", credentials);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);
