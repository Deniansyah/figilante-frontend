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
    transaction: (state, action) =>{
      const trans = {};
      trans.userId= action.payload.userId
      trans.productId = action.payload.productId
      trans.price = action.payload.price
      trans.sizeId = action.payload.sizeId
      trans.qty = action.payload.qty
      trans.deliveryMethodsId = action.payload.deliveryMethodsId
      trans.timeArrived = action.payload.timeArrived
      trans.total = (action.payload.price) * (action.payload.qty)
      state.push(trans)
    },
    checkOut: (state, action) => {
      return initialState;
    },
  },
  extraReducers: null,
  // extraReducers: (build) =>{
  //   build.addCase(transactionAction.fulfilled, (state, action) => {
  //     state.userId = action.payload
  //     state.productId = action.payload
  //     state.price = action.payload
  //     state.sizeId = action.payload
  //     state.qty = action.payload
  //     state.deliveryMethodsId = action.payload
  //     state.timeArrived = action.payload
  //     state.total = action.payload
  //   });
  //   build.addCase(transactionAction.pending, (state, action) => {
  //     state.userId = action.payload
  //     state.productId = action.payload
  //     state.price = action.payload
  //     state.sizeId = action.payload
  //     state.qty = action.payload
  //     state.deliveryMethodsId = action.payload
  //     state.timeArrived = action.payload
  //     state.total = action.payload
  //   });
  //   build.addCase(transactionAction.rejected, (state, action) => {
  //     state.userId = action.payload
  //     state.productId = action.payload
  //     state.price = action.payload
  //     state.sizeId = action.payload
  //     state.qty = action.payload
  //     state.deliveryMethodsId = action.payload
  //     state.timeArrived = action.payload
  //     state.total = action.payload
  //   });
  // }
});

export const { transaction } = transactionReducer.actions;

export default transactionReducer.reducer;


