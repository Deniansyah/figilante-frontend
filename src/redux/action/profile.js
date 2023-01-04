import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const profileAction = createAsyncThunk(
  "profile/profileAsync",
  async (args, { getState }) => {
    try {
      const { token } = getState().auth;
      const { data } = await http(token).get("/profile");
      return data.results;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
