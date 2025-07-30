import React from 'react';
import '../CSS/cart.css'

const Cart = ({ cartItems, onRemove, onIncrement, onDecrement }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <img className='empty_cart' src="https://hsnbazar.com/images/empty-cart.png" alt="" />
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item-details">
                <img src={item.img} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">₹{item.Price * item.quantity.toFixed(2)}</p>
                </div>
              </div>
              <div className="cart-item-actions">
                <button className="cart-item-action" onClick={() => onIncrement(item)}>
                  +
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button className="cart-item-action" onClick={() => onDecrement(item)}>
                  -
                </button>
                <button className="cart-item-remove" onClick={() => onRemove(item)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
