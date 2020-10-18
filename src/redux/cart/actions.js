import actionTypes from './actionTypes';

const toggleCartVisibility = () => ({
  type: actionTypes.TOGGLE_CART_VISIBILITY,
});

const addItemToCart = value => ({
  type: actionTypes.ADD_ITEM,
  value,
});
const clearItemFromCart = value => ({
  type: actionTypes.CLEAR_ITEM,
  value,
});

const changeItemQuantity = value => ({
  type: actionTypes.CHANGE_QUANTITY,
  value,
});

export default {
  toggleCartVisibility,
  addItemToCart,
  clearItemFromCart,
  changeItemQuantity,
};
