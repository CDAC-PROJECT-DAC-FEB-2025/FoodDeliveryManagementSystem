import React from "react";
import "./Orders.css";

// Sneha's simple orders page
function Orders() {
  const orders = [
    { id: 1, item: "Pizza", status: "Delivered" },
    { id: 2, item: "Biryani", status: "On the way" }
  ];

  return (
    <div className="orders-page">
      <h2>My Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.item}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
