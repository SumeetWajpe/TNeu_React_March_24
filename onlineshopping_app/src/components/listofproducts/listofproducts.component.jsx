import React, { Component, useEffect, useState } from "react";
import Product from "../product/product.component";
import axios from "axios";
const ListOfProducts = () => {
  const [productList, SetProductList] = useState([]);
  useEffect(() => {
    let thePromise = axios.get("http://localhost:3500/products");
    thePromise
      .then(res => {
        SetProductList(res.data);
      })
      .catch(err => console.log(err.message));
  }, []);
  return (
    <div className="row">
      {productList.map(product => (
        <Product productdetails={product} key={product.id} />
      ))}
    </div>
  );
};

export default ListOfProducts;
