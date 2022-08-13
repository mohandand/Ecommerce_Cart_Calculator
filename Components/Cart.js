import React, { useState, useEffect } from 'react';
import './cart.css';
import axios from 'axios';

export default function Cart() {
  const 

  // function getProducts() {
  //   fetch('https://dummyjson.com/products')
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  //   return;
  // }

  const getProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app" onClick={getProducts}>
      Ecommerce Site
    </div>
  );
}
