import React from "react";
import "./Home.css";

function Home() {
  const restaurants = [
    { name: "Pizza Palace", cuisine: "Italian", image: "https://via.placeholder.com/150" },
    { name: "Spice Hub", cuisine: "Indian", image: "https://via.placeholder.com/150" },
    { name: "Burger Town", cuisine: "American", image: "https://via.placeholder.com/150" },
    { name: "Sushi World", cuisine: "Japanese", image: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="home">
      <h1>Welcome to Good Love Food</h1>
      <div className="restaurant-list">
        {restaurants.map((res, index) => (
          <div key={index} className="restaurant-card">
            <img src={res.image} alt={res.name} />
            <h3>{res.name}</h3>
            <p>{res.cuisine}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;