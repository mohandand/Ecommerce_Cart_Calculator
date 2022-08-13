export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRDOUCTS':
      return { ...state, products: action.payload };
  }
};
