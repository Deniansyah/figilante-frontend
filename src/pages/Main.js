import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Login from "./Login";
import SignUp from "./signUp";
import ProductCust from "./ProductCust";
import Profile from "./Profile";
import ProductAdmin from "./ProductAdmin";
import DetailsCust from "./DetailsCust";
import DetailsProductAdmin from "./DetailsProductAdmin";
import EditProduct from "./EditProduct";
import CartPayment from "./CartPayment";
import History from "./History";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/product-customer" element={<ProductCust />}></Route>
        <Route path="/product-details" element={<DetailsCust />}></Route>
        <Route path="/cart-payment" element={<CartPayment />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route
          path="/product-details-admin"
          element={<DetailsProductAdmin />}
        ></Route>
        <Route path="/product-admin" element={<ProductAdmin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/edit-product" element={<EditProduct />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
