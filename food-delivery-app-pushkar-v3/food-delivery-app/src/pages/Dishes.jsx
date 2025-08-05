import React, { useState } from "react";
import "./Dishes.css";

// Pushkar's dishes page - static data
function Dishes() {
  const [menu] = useState([
    { name: "Margherita Pizza", price: 250 },
    { name: "Chicken Biryani", price: 200 },
    { name: "Paneer Butter Masala", price: 180 }
  ]);

  return (
    <div className="dishes-page">
      <h2>Available Dishes</h2>
      <ul>
        {menu.map((item, idx) => (
          <li key={idx}>
            {item.name} - ₹{item.price}
            {/* Pushkar not handling add to cart fully yet */}
            <button>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dishes;