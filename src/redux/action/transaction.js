import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const transactionAction = createAsyncThunk(
  "transaction/transactionAsync",
  async ({ value, cb }) => {
    for (let index = 0; index< value.lenght; index++){
      try {
        const form = new URLSearchParams({
          productId: value[index].productId,
          deliveryMethodId: value[index].deliveryMethodId,
        });
        const { data } = await http().post("/transactions", form);
        cb();
        return data.results;
      } catch (err) {
        throw err.response.data.message;
      }

    }
  }

)