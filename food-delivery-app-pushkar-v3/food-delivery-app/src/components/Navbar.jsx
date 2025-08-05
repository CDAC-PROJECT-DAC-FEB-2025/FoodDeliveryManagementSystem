import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Pushkar updated navbar for dishes + cart
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Good Love Food</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dishes">Dishes</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;