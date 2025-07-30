// File: src/pages/restaurant/EditProduct.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../CSS/restaurant/productform.css'; // for AddProduct/EditProduct

const EditProduct = ({ menuItems, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', price: '', image: '' });

  useEffect(() => {
    const item = menuItems.find((item, index) => index === parseInt(id));
    if (item) setProduct(item);
  }, [id, menuItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(parseInt(id), product);
    navigate('/restaurant/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} required />
      <input type="number" value={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} required />
      <input type="file" onChange={e => setProduct({ ...product, image: URL.createObjectURL(e.target.files[0]) })} />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditProduct;