import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, axiosInstanceBase } from "config/axios";
import { IPayloadRegister, IResponeLogin, IResponeRegister } from "./types";

const initialState = {};

export const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async (payload: { username: string; password: string }) => {
    try {
      const { data }: IResponeLogin = await axiosInstanceBase.post(
        "/auth-service/api/v1/auth/login",
        payload
      );
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        window.location.reload();
      }
      return data;
    } catch (err) {
      return false;
    }
  }
);

export const handleRegister = createAsyncThunk(
  "auth/handleRegister",
  async (payload: IPayloadRegister) => {
    try {
      const {
        data: { login_data },
      }: IResponeRegister = await axiosInstanceBase.post(
        "/auth-service/api/v1/auth/register",
        payload
      );
      if (login_data.access_token) {
        localStorage.setItem("token", login_data.access_token);
        window.location.reload();
      }
      return login_data;
    } catch (err) {
      return false;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.pending, (state) => {})
      .addCase(handleLogin.fulfilled, (state, action) => {});
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
