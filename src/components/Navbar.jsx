import React, { useState } from "react";
import "../CSS/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showBar, setShowBar] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src="/img/logo1.PNG" alt="" />
        </div>
        <div className={showBar ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <a href="#Dish">Dishes</a>
            </li>
            <li>
              <a href="#Brand">Our Brand</a>
            </li>
            <li>
              <a href="#onlineorder">Meal</a>
            </li>
          </ul>
        </div>
        <div className="search">
          <input type="text" />
          <label htmlFor="">Search</label>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Link to='/login'><a href="">Log in</a></Link>
            </li>
            <li>
              <Link to='/signup'><a href="#">Sign up</a></Link>
            </li>
          </ul>
          <div className="hamburger">
            <span onClick={()=>setShowBar(!showBar)}><GiHamburgerMenu /></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
