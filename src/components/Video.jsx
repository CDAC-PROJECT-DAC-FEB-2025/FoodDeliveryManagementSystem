import React from "react";
import { NavLink } from "react-router-dom";

const Video = () => {
  return (
    <>
      <div className="content">
        <aside className="cart_img">
        <NavLink to='/cart' className='cart_nav'><img className="cart_img1" src="/img/shopping_cart_img.png" alt="" /></NavLink>
        </aside>
        <video autoPlay muted loop src="./img/video.mp4" />
        <section id="home">
          <h1 className="h-primary">Welcome to Our Online Meal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla
            quae doloribus delectus.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
      </div>
    </>
  );
};

export default Video;
