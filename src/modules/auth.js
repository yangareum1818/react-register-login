import {
  combineReducers,
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  register: {
    nick_name: "",
    email: "",
    password: "",
  },
  login: {
    email: "",
    password: "",
  },
  loading: false,
  auth: null,
  authError: null,
};

const auth = createAsyncThunk("auth/registration", async (data) => {
  console.log(registration);
  const res = await axios.post("http://59.12.200.154/auth/registration", {
    nick_name: data.nick_name,
    email: data.email,
    password: data.password,
  });
  console.log(res);
  return res;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => ({
      [form]: {
        ...state[form],
        [key]: value,
      },
    }),
    InitializeForm: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(auth.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(auth.fulfilled, (state, { payload: auth }) => {
      state.loading = false;
      state.auth = auth;
      state.authError = null;
    });
    builder.addCase(auth.rejected, (state, { payload: error }) => {
      state.loading = false;
      state.auth = null;
      state.authError = error;
    });
  },
});

export const { changeField, InitializeForm } = authSlice.actions;
export default authSlice.reducer;
