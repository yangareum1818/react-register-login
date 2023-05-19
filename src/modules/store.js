import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

export const store = configureStore({
  reducer: authSlice.reducer,
  devTools: process.env.NODE_ENV !== "production",
});
