import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../JSON/product.json";
import "../CSS/product.css";

const Product = ({ onAddToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productIdInt = productId;
    if (Array.isArray(productsData)) {
      const selectedProduct = productsData.find((p) => p.id === productIdInt);

      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      onAddToCart(product);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Grab Some Tasty Items</h1>
      <div className="product_main1">
        <div className="product_main1_content1">
          <img src={product.img} alt="" />
        </div>
        <div className="product_main1_content2">
          <h3>{product.name}</h3>
          <ul>
            <li>
              <b>Price : ₹</b>
              {product.Price}
            </li>
            <li><span className="product_rate">{product.Rating}</span></li>
            <li>
              <b>Delivery In :</b> 30 min
            </li>
            <li className="product_li">
              <img src="../img/location.png" alt="" />
              <span>{product.Location}</span>
            </li>
          </ul>
          <div className="product_btn">
            <button onClick={handleAddToCart}>Add cart</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="product_main2">
        <div className="product_item">
          <img src={product.img1} alt="" />
          <p>{product.name1}</p>
        </div>
        <div className="product_item">
          <img src={product.img2} alt="" />
          <p>{product.name2}</p>
        </div>
        <div className="product_item">
          <img src={product.img3} alt="" />
          <p>{product.name3}</p>
        </div>
        <div className="product_item">
          <img src={product.img4} alt="" />
          <p>{product.name4}</p>
        </div>
        <div className="product_item">
          <img src={product.img5} alt="" />
          <p>{product.name5}</p>
        </div>
        <div className="product_item">
          <img src={product.img6} alt="" />
          <p>{product.name6}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
