import actionTypes from './actionTypes';

const INITIAL_STATE = {
  cartVisible: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case actionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        cartVisible: !state.cartVisible,
      };
    default:
      return state;
  }
};
