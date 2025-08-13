import React from "react";
import { Link } from "react-router-dom";
import "./OrderPlaced.css";

const OrderPlaced = () => (
  <div className="order-placed">
    <div className="order-placed-icon">
      <span role="img" aria-label="success">🎉</span>
    </div>
    <h2>Order Confirmed!</h2>
    <p>Your order has been placed successfully.</p>
    <div className="order-placed-details">
      <p>Thank you for choosing <b>FoodDel</b>!<br />
      We’re preparing your delicious meal and will deliver it soon.</p>
    </div>
    <Link to="/" className="order-placed-home-btn">Go back to Home</Link>
  </div>
);

export default OrderPlaced;