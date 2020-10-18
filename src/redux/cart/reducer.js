import actionTypes from './actionTypes';
import initState from './initState';
import C from './constants';
import U from './utils.js';

export default (state = initState, { type, value }) => {
  switch (type) {
    case actionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        [C.PROPS.CART_VISIBLE]: !state[C.PROPS.CART_VISIBLE],
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        [C.PROPS.CART_ITEMS]: U.addItemToCart(state[C.PROPS.CART_ITEMS], value),
      };
    case actionTypes.CLEAR_ITEM:
      return {
        ...state,
        [C.PROPS.CART_ITEMS]: U.clearItemFromCart(
          state[C.PROPS.CART_ITEMS],
          value,
        ),
      };
    case actionTypes.CHANGE_QUANTITY:
      return {
        ...state,
        [C.PROPS.CART_ITEMS]: U.changeItemQuantity(
          state[C.PROPS.CART_ITEMS],
          value,
        ),
      };
    default:
      return state;
  }
};
