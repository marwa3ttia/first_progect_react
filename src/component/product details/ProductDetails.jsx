import React, { useEffect, useState } from "react";
import {Spinner} from 'react-bootstrap';
export const ProductDetails = ({match}) => {
  const [productsDetails, setproductsDetails] = useState({});
  useEffect(() => {
    fetchProductsDetail();
  }, []);
  const fetchProductsDetail = () => {
    return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setproductsDetails(json));
  };
  return ( <div>
{
    productsDetails
    ?
    <div className="container d-flex align-items-center justify-content-center pt-5">
    <div className="w-25 me-4">
      <img src={productsDetails.image} alt="" className="w-100" />
    </div>
    <div className="text-center">
      <p> {productsDetails.title}</p>
      <p>{productsDetails.price}</p>

      <p>{productsDetails.category}</p>
    </div>
  </div>
  :
  <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
}

      </div>
 
  );
};
export default ProductDetails;
