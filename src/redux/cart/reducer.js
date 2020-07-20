import actionTypes from './actionTypes';
import * as U from './utils.js';

const INITIAL_STATE = {
  cartVisible: false,
  cartItems: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        cartVisible: !state.cartVisible,
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: U.addItemToCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};
