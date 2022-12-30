import {BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ProductCust from "./pages/ProductCust";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product-customer" element={<ProductCust/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
