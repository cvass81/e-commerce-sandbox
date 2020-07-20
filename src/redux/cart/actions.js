import actionTypes from './actionTypes';

export const toggleCartVisibility = () => ({
  type: actionTypes.TOGGLE_CART_VISIBILITY,
});

export const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});
