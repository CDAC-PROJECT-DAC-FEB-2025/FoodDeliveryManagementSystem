// File: src/pages/restaurant/Dashboard.jsx
import React from 'react';

const Dashboard = ({ menuItems, orders }) => {
  return (
    <div className="dashboard">
      <h2>Welcome Restaurant Admin</h2>
      <div className="summary-cards">
        <div className="card">Total Menu Items: {menuItems.length}</div>
        <div className="card">Total Orders: {orders.length}</div>
      </div>
    </div>
  );
};

export default Dashboard;
