import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Order from "./components/Order";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";

import RestaurantLogin from './pages/restaurant/RestaurantLogin'; // fixed name
import RestaurantSignup from "./pages/restaurant/RestaurantSignup";
import Dashboard from './pages/restaurant/Dashboard';
import AddProduct from './pages/restaurant/AddProduct';
import EditProduct from './pages/restaurant/EditProduct';
import Orders from './pages/restaurant/Orders';

import AdminLogin from './pages/admin/AdminLogin'; // fixed name
import AdminSignup from './pages/admin/AdminSignup';

const App = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [menuItems, setMenuItems] = useState([]);
  const [restaurantOrders, setRestaurantOrders] = useState([
    { customerName: "Ravi", items: ["Pizza", "Pasta"] },
    { customerName: "Neha", items: ["Burger"] }
  ]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      const updated = [...cart];
      updated[index].quantity += 1;
      setCart(updated);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  const handleIncrement = (item) => {
    const updated = [...cart];
    const index = updated.findIndex((i) => i.id === item.id);
    updated[index].quantity += 1;
    setCart(updated);
  };

  const handleDecrement = (item) => {
    const updated = [...cart];
    const index = updated.findIndex((i) => i.id === item.id);
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }
    setCart(updated);
  };

  const handleAddProduct = (product) => {
    setMenuItems([...menuItems, product]);
  };

  const handleUpdateProduct = (index, updatedProduct) => {
    const newMenu = [...menuItems];
    newMenu[index] = updatedProduct;
    setMenuItems(newMenu);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* 👤 User Routes */}
        <Route path="/" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:productId" element={<Product onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={
          <Cart
            cartItems={cart}
            onRemove={handleRemoveFromCart}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        } />

        {/* 🧑‍🍳 Restaurant Routes */}
        <Route path="/restaurant/login" element={<RestaurantLogin />} />
        <Route path="/restaurant/signup" element={<RestaurantSignup />} />
        <Route path="/restaurant/dashboard" element={
          <Dashboard menuItems={menuItems} orders={restaurantOrders} />
        } />
        <Route path="/restaurant/add" element={<AddProduct onAdd={handleAddProduct} />} />
        <Route path="/restaurant/edit/:id" element={
          <EditProduct menuItems={menuItems} onUpdate={handleUpdateProduct} />
        } />
        <Route path="/restaurant/orders" element={<Orders orders={restaurantOrders} />} />

         {/* 🧑‍🍳 Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
