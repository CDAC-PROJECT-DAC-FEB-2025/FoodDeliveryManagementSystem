import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Dishes from "./pages/Dishes.jsx";
import Cart from "./pages/Cart.jsx";
import Orders from "./pages/Orders.jsx"; // Sneha added
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/cart" element={<Cart />} />
        {/* Sneha added Orders route */}
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
