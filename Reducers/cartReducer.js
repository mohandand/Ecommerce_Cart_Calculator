export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRDOUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    default:
      break;
  }
};
