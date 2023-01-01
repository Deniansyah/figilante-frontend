import {BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductCust from "./pages/ProductCust";
import Profile from "./pages/Profile";
import ProductAdmin from "./pages/ProductAdmin";
import DetailsCust from "./pages/DetailsCust";
import DetailsProductAdmin from "./pages/DetailsProductAdmin";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/product-customer" element={<ProductCust/>}></Route>
        <Route path="/product-details" element={<DetailsCust/>}></Route>
        <Route path="/product-details-admin" element={<DetailsProductAdmin/>}></Route>
        <Route path="/product-admin" element={<ProductAdmin/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/edit-product" element={<EditProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
