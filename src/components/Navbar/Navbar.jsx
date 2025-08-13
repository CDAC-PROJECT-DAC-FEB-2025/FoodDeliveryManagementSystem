import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef();
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // or whatever key you used
    navigate("/admin-login"); // redirect to login page
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />
      <div className="profile-section" ref={popupRef}>
        <img
          className="profile"
          src={assets.profile_image}
          alt="profile"
          onClick={togglePopup}
        />
        {showPopup && (
          <div className="profile-popup">
            <p onClick={() => navigate("/admin-dashboard")}>Admin Dashboard</p>
            <p onClick={() => navigate("/admin-settings")}>Settings</p>
            <p onClick={handleLogout} style={{ color: "red", cursor: "pointer" }}>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
