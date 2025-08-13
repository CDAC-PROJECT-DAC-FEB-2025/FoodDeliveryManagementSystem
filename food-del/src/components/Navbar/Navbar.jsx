import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getCartItemCount, searchTerm, setSearchTerm } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="Logo" /></Link>
      
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <input
  type="text"
  placeholder="Search food..."
  value={searchTerm}
  onChange={e => setSearchTerm(e.target.value)}
  onKeyDown={e => {
    if (e.key === "Escape") setSearchTerm(""); // Clear search when Esc is pressed
  }}
  className="navbar-search-input"
/>

        <img src={assets.search_icon} alt="Search" />
        
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Cart" />
          {getCartItemCount() > 0 && (
            <div className="cart-count">
              {getCartItemCount()}
            </div>
          )}
        </Link>

        <button onClick={() => setShowLogin(true)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

