import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ React Router Link
import "./RegisterPage.css";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering:", name, email, password);
    // Add register logic here
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">📝 Create Account</h2>
        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Full Name"
            className="register-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <p className="register-footer">
          Already have an account?
          <Link to="/login" className="link-btn"> Login</Link>
        </p>
      </div>
    </div>
  );
}