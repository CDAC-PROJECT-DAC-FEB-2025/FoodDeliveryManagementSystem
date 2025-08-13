import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminLoginPopup from "../AdminLoginPopup/AdminLoginPopup";
import './AdminNavbar.css';

const AdminNavbar = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(!!localStorage.getItem("adminToken"));

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    setIsAdminLoggedIn(false);
  };

  return (
    <div className="admin-navbar">
      <div className="admin-left">
        <Link to="/admin">Admin Panel</Link>
      </div>

      <div className="admin-right">
        {isAdminLoggedIn ? (
          <>
            <span className="admin-email">{localStorage.getItem("adminEmail")}</span>
            <Link to="/admin/orders">Orders</Link>
            <Link to="/admin/add-item">Add Item</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={() => setShowAdminLogin(true)}>Admin Login</button>
        )}
      </div>

      {showAdminLogin && (
        <AdminLoginPopup
          onClose={() => setShowAdminLogin(false)}
          onLoginSuccess={() => setIsAdminLoggedIn(true)}
        />
      )}
    </div>
  );
};

export default AdminNavbar;
