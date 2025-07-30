import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import homepage from "../JSON/homepage.json";
import "../CSS/order.css";
import Video from "./Video";
import { NavLink } from "react-router-dom";

const Order = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1500, min: 1200 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 900, min: 730 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 730, min: 520 },
      items: 3,
    },
    mobile1: {
      breakpoint: { max: 520, min: 350 },
      items: 2,
    },
    mobile2: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Video/>
      <div id="Dish">
        <h2>Inspiration for your first order</h2>
      </div>
      <Carousel responsive={responsive}>
        {homepage.Dish.map((data) => {
          return (
            <>
              <div className="product1" key={data.id}>
                <div className="items">
                  <img src={data.img} alt="" />
                  <p>
                    <NavLink to={`/product/${data.id}`}>{data.name}</NavLink>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>

      <div id="Brand">
        <h2>Top Brands for you</h2>
      </div>
      <Carousel responsive={responsive}>
        {homepage.Brand.map((data) => {
          return (
            <>
              <div className="product1">
                <div className="items" key={data.name}>
                  <img src={data.img1} alt="" />
                  <p onclick="getId(event)" id={data.link}>
                    {/* {data.name} */}
                    <NavLink to={data.link}>{data.name}</NavLink>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>

      <div id="onlineorder">
        <h2>Order food online</h2>
        <div id="order_sec">
          <div id="order_part">
            {homepage.Order.map((data) => {
              return (
                <>
                <NavLink to={`/product/${data.id}`}>
                  <div id="order_product" key={data.name}>
                    <a href="">
                      <img src={data.img} alt="" />
                    </a>
                    <a href="">
                      <p> {data.name} </p>
                    </a>
                  </div>
                  </NavLink>
                </>
              );
            })}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Order;
