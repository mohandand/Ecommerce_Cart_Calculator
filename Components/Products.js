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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{prod.title}</span>
              <b>$ {prod.price}</b>
            </div>
            {cart.some((p) => {
              p.id === prod.id;
            }) ? (
              <button
                className="addtoCart"
                onClick={() => {
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: {
                      id: prod.title,
                      thumbnail: prod.thumbnail,
                      qty: 1,
                      price: prod.price,
                    },
                  });
                }}
              >
                REMOVE FROM CART
              </button>
            ) : (
              <button className="addtoCart">ADD TO CART</button>
            )}
          </div>
        );
      })}
    </div>
  );
}
