
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, addtocart } from "../Features/ProductSlice";
import "../CSS/Cart.css";

function Home() {
  const [filterCategory, setFilterCategory] = useState("");
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const categoryProducts = (category) => {
    if (category === "All Products") {
      setFilterCategory(""); 
    } else {
     setFilterCategory(category);
    }
  };

const filteredProducts = filterCategory? 
productState.data.filter((product) => product.category === filterCategory): productState.data;

  return (
    <>
    <div>
        <h1> Fake Products Store...</h1>
        <label id="option">Choose a Product : </label>
        <select id="option" onChange={(e) =>categoryProducts(e.target.value)}>
          <option>All Products</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <div className="main_div">
          {filteredProducts.map((product, index) => (
            <div className="detail" key={index}>
              <h3>Title: {product.title}</h3>
              <h3>Price: {product.price}</h3>
              <h3>Category: {product.category}</h3>
              <img src={product.image} alt={product.title} />
              <button id="btns" onClick={() => dispatch(addtocart(product))}>
              Add to Cart
              </button>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Home;
