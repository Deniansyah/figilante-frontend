import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const transactionAction = createAsyncThunk(
  "transaction/transactionAsync",
  (value, cb) =>{
    try {
      const cart = {
        userId: value.userId,
        productId: value.productId,
        price: value.price,
        sizeId: value.sizeId,
        qty: value.qty,
        deliveryMethodsId: value.deliveryMethodsId,
        timeArrived: value.timeArrived,
        total: (parseInt(value.price) * parseInt(value.qty)),
      }
      cb();
      return cart;
    } catch (error) {
      throw error.response.data.message;
    }
  }

)