import { createSlice } from "@reduxjs/toolkit";
import { transactionAction } from "../action/transaction";

const initialState = [];
// const initialState = [
//   {
//     userId: null,
//     productId: null,
//     price: null,
//     sizeId: null,
//     qty: null,
//     deliveryMethodsId: null,
//     timeArrived: null,
//     total: null,
//   },
// ];

const transactionReducer = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    transaction: (state, action) => {
      const trans = {};
      trans.userId = action.payload.userId;
      trans.productId = action.payload.productId;
      trans.productName = action.payload.productName;
      trans.price = action.payload.price;
      trans.sizeId = action.payload.sizeId;
      trans.selectedSize = action.payload.selectedSize;
      trans.qty = action.payload.qty;
      trans.deliveryMethodsId = action.payload.deliveryMethodsId;
      trans.timeArrived = action.payload.timeArrived;
      trans.total = action.payload.price * action.payload.qty;
      state.push(trans);
    },
  },
  // extraReducers: null,
  extraReducers: (build) => {
    build.addCase(transactionAction.fulfilled, (state, action) => {
      return initialState;
    });
    // build.addCase(transactionAction.pending, (state, action) => {
    //   state.isLoading = false;
    // });
    // build.addCase(transactionAction.rejected, (state, action) => {
    //   state.message = action.error.message;
    // });
  },
});

export const { transaction } = transactionReducer.actions;

export default transactionReducer.reducer;
