import actionTypes from './actionTypes';

const toggleCartVisibility = () => ({
  type: actionTypes.TOGGLE_CART_VISIBILITY,
});

const addItemToCart = item => ({
  type: actionTypes.ADD_ITEM,
  value: item,
});

export default {
  toggleCartVisibility,
  addItemToCart,
};
