// File: src/pages/restaurant/AddProduct.jsx
import React, { useState } from 'react';
import '../../CSS/restaurant/productform.css'; // for AddProduct/EditProduct

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, price, image });
    setName('');
    setPrice('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <input type="file" accept="image/*" onChange={e => setImage(URL.createObjectURL(e.target.files[0]))} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;