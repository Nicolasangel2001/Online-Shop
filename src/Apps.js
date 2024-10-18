import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";

const Apps = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default Apps;
