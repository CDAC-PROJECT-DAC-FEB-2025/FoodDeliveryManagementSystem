import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Good Love Food</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {/* Future builds will add Login, Orders here */}
      </ul>
    </nav>
  );
}

export default Navbar;