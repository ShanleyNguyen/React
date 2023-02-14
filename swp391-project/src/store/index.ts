import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import thunkMiddleware from "redux-thunk";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice,
  },
  // middleware: [thunkMiddleware],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
