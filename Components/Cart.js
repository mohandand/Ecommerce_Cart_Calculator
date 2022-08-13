import React, { useState, useEffect, useReducer } from 'react';
import './cart.css';
import axios from 'axios';
import { cartReducer } from '../Reducers/cartReducer.js';

export default function Cart() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  // function getProducts() {
  //   fetch('https://dummyjson.com/products')
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  //   return;
  // }

  const getProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    dispatch({
      type: 'ADD_PRDOUCTS',
      payload: data.products,
    });
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
