import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ React Router Link
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    // Add login logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">🍔 FoodZilla Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Enter Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="login-footer">
          Don't have an account?
          <Link to="/register" className="link-btn"> Register</Link>
        </p>
      </div>
    </div>
  );
}