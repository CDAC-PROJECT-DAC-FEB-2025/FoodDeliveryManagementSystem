// File: src/pages/restaurant/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/login.css'; // for Login.jsx

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@rest.com' && password === '1234') {
      localStorage.setItem('restaurantAuth', true);
      navigate('/restaurant/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
         <p>
          Forgot Password? <a href="/login">Click here</a>
        </p>
      </form>
    </div>
    
  );
};

export default Login;
