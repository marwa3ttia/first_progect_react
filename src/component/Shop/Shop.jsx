import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Shop.css'
export const Shop = () => {
  const [products, setProducts] = useState([]);
  //useEffect
  useEffect(() => {
    fetchProducts();
  }, []);

  //fetch data
  const fetchProducts = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <div>
      <h1> welcome in shop</h1>
      <section className = "container d-flex flex-wrap">
      {products.map((product) => {
        return (
          <Link to ={`/shop/${product.id}`} key = {product.id} className = "product p-3 me-3 mb-3 border">
              <div className = " d-flex justify-content-center">
              <img className="w-50" src={product.image} alt = ""/> 
              </div>
              
            <p> {product.title} </p>
            <p> <strong> price:</strong>{product.price} </p>
          </Link>
        );
      })}
    </section>
    </div>

  );
};
export default Shop;
