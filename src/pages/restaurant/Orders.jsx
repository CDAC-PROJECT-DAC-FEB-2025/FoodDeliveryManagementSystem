// File: src/pages/restaurant/Orders.jsx
import React from 'react';
import '../../CSS/restaurant/orders.css'; // for Orders.jsx


const Orders = ({ orders }) => {
  return (
    <div className="orders-list">
      <h2>Customer Orders</h2>
      {orders.length === 0 ? <p>No orders yet.</p> : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>{order.customerName} ordered {order.items.length} items</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
