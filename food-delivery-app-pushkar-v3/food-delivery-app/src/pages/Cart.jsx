import React, { useState } from "react";
import "./Cart.css";

// Pushkar's simple cart
function Cart() {
  const [items, setItems] = useState([
    { name: "Margherita Pizza", qty: 1 }
  ]);

  const removeItem = (index) => {
    const copy = [...items];
    copy.splice(index, 1);
    setItems(copy);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              {item.name} x {item.qty}
              <button onClick={() => removeItem(idx)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;