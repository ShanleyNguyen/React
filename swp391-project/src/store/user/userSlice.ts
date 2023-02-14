import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

interface IValues {
  isAuthenticated: boolean;
  userInfo: IUserInfo | null;
}

interface IUserInfo {
  email: string;
  user_name: string;
  first_name: string;
  last_name: string;
  full_name: string;
  date_of_birth: Date | string;
}

const initialState: IValues = {
  isAuthenticated: false,
  userInfo: {
    email: "",
    user_name: "",
    first_name: "",
    last_name: "",
    full_name: "",
    date_of_birth: "",
  },
};

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { dispatch }) => {
    try {
      const { data } = await axiosInstance.get(
        "/api-gateway/user-service-api/api/v1/profile/info"
      );
      if (data) {
        dispatch(setUserInfo(data));
        dispatch(setIsAuthen(true));
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, { payload }) {
      state.userInfo = payload;
    },
    setIsAuthen(state, { payload }) {
      state.isAuthenticated = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {});
    builder.addCase(getProfile.fulfilled, (state) => {});
  },
});

export const { setUserInfo, setIsAuthen } = userSlice.actions;

export default userSlice.reducer;
