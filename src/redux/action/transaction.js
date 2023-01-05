import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const transactionAction = createAsyncThunk(
  "transaction/transactionAsync",
  async ([dataCarts, token]) => {
    try {
      const { data } = await http(token).post("/transactions", dataCarts);
      // cb();
      return data.results;
    } catch (err) {
      console.log(err);
      throw err.response.data.message;
    }
  }
);
