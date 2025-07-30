import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/signup.css'; 

const RestaurantSignup = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
  });

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In real app, send POST request to backend
    console.log('Restaurant Registered:', restaurant);

    // Redirect to restaurant login
    navigate('/restaurant/login');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={restaurant.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={restaurant.address}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={restaurant.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={restaurant.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
        <p>
          Already registered? <a href="/signup">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default RestaurantSignup;
