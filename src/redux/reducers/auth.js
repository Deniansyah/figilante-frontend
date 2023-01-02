import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "../action/auth";

const initialState = {
  token: null,
  isLoading: true,
  message: "",
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      return initialState;
    },
  },
  extraReducers: (build) => {
    build.addCase(loginAction.pending, (state, { payload }) => {
      state.isLoading = false;
    });

    build.addCase(loginAction.rejected, (state, action) => {
      state.isLoading = true;
      state.message = action.error.message;
    });

    build.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.isLoading = true;
      state.message = "";
    });

    build.addCase(registerAction.pending, (state, { payload }) => {
      state.isLoading = false;
    });

    build.addCase(registerAction.rejected, (state, action) => {
      state.isLoading = true;
      state.message = action.error.message;
    });

    build.addCase(registerAction.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.isLoading = true;
      state.message = "";
    });
  },
});

export const { logout } = authReducer.actions;

export default authReducer.reducer;
