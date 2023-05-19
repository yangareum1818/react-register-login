import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

export default combineReducers({
  user: authSlice.reducer,
});
