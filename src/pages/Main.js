import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Login from "./Login";
import SignUp from "./signUp";
import ForgotPassword from "./ForgotPassword"
import ResetPassword from "./ResetPassword"
import ProductCust from "./ProductCust";
import Profile from "./Profile";
import ProductAdmin from "./ProductAdmin";
import DetailsCust from "./DetailsCust";
import DetailsProductAdmin from "./DetailsProductAdmin";
import EditProduct from "./EditProduct";
import CartPayment from "./CartPayment";
import History from "./History";
import Chat from "./Chat";
import LoggedIn from "../component/LoggedIn";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/product-customer" element={<ProductCust />}></Route>
        <Route path="/product-details/:id" element={<DetailsCust />}></Route>
        <Route path="/cart-payment" element={<CartPayment />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route
          path="/product-customer"
          element={
            <LoggedIn>
              <ProductCust />
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/product-details"
          element={
            <LoggedIn>
              <DetailsCust />
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/cart-payment"
          element={
            <LoggedIn>
              <CartPayment />
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/history"
          element={
            <LoggedIn>
              <History />
            </LoggedIn>
          }
        ></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route
          path="/product-details-admin"
          element={
            <LoggedIn>
              <DetailsProductAdmin />
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/product-admin"
          element={
            <LoggedIn>
              <ProductAdmin />
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <LoggedIn>
              <Profile />
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/edit-product"
          element={
            <LoggedIn>
              <EditProduct />
            </LoggedIn>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
