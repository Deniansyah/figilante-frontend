import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import ProductCust from "./ProductCust";
import Profile from "./Profile";
import ProductAdmin from "./ProductAdmin";
import NewProduct from "./NewProduct";
import NewPromo from "./NewPromo";
import DetailsCust from "./DetailsCust";
import DetailsProductAdmin from "./DetailsProductAdmin";
import EditProduct from "./EditProduct";
import CartPayment from "./CartPayment";
import History from "./History";
import Chat from "./Chat";
import Orders from "./Orders";
import LoggedIn from "../component/LoggedIn";
import IsAdmin from "../component/IsAdmin";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/chat"
          element={
            <LoggedIn>
              <Chat />
            </LoggedIn>
          }
        ></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        {/* <Route path="/product-customer" element={<ProductCust />}></Route>
        <Route path="/product-details/:id" element={<DetailsCust />}></Route>
        {/* <Route path="/cart-payment" element={<CartPayment />}></Route> */}
        <Route path="/history" element={<History />}></Route>
        <Route path="/history" element={<History />}></Route>
        {/* <Route path="/chat" element={<Chat />}></Route> */}
        <Route
          path="/product-customer"
          element={
            <LoggedIn>
              <ProductCust />
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/product-details/:id"
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
          path="/product-details-admin/:id"
          element={
            <LoggedIn>
              <IsAdmin>
                <DetailsProductAdmin />
              </IsAdmin>
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/product-admin"
          element={
            <LoggedIn>
              <IsAdmin>
                <ProductAdmin />
              </IsAdmin>
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
              <IsAdmin>
                <EditProduct />
              </IsAdmin>
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/new-product"
          element={
            <LoggedIn>
              <IsAdmin>
                <NewProduct />
              </IsAdmin>
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/new-promo"
          element={
            <LoggedIn>
              <IsAdmin>
                <NewPromo />
              </IsAdmin>
            </LoggedIn>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <LoggedIn>
              <Orders />
            </LoggedIn>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
