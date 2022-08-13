import React, { useState, useEffect, useReducer } from 'react';
import './cart.css';
import axios from 'axios';
import { cartReducer } from '../Reducers/cartReducer.js';
import Products from './Products.js';
import Carti from './Carti.js';

export default function Cart() {
  //state will have all states and dispatch to manipulate that state
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
  console.log(state);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app" onClick={getProducts}>
      <Products state={state} dispatch={dispatch} />
      <Carti state={state} dispatch={dispatch} />
    </div>
  );
}
