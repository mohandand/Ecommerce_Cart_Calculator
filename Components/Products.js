import React from 'react';

export default function Products(state, dispatch) {
  const { products, cart } = state.state;
  console.log('All Products');
  console.log(products);
  //console.log(state.state.products);
  return (
    <div className="products">
      {products.map((prod) => {
        return (
          <div className="productlist" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} className="image" />
          </div>
        );
      })}
    </div>
  );
}
