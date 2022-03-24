import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const productsArray = ["car", "bike", "motorcycle"];

const ProductListPage = (props) => {
  // console.log(props);
  const products = productsArray.map((product) => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <div className="productslist">
      <h3>Lista produktów</h3>
      <ul>{products}</ul>
    </div>
  );
};

export default ProductListPage;
