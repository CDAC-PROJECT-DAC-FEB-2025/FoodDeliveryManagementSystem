import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminDashboard from "./AdminDashboard";
import AdminOrders from "./AdminOrders";
import AdminAddItem from "./AdminAddItem";

const AdminLayout = () => {
  const isAdmin = !!localStorage.getItem("adminToken");

  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        <Routes>
          <Route index element={isAdmin ? <AdminDashboard /> : <Navigate to="/admin" />} />
          <Route path="orders" element={isAdmin ? <AdminOrders /> : <Navigate to="/admin" />} />
          <Route path="add-item" element={isAdmin ? <AdminAddItem /> : <Navigate to="/admin" />} />
        </Routes>
      </div>
    </>
  );
};

export default AdminLayout;
