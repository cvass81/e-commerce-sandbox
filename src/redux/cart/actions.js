import actionTypes from './actionTypes';

const toggleCartVisibility = () => ({
  type: actionTypes.TOGGLE_CART_VISIBILITY,
});

const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  value: item,
});

export default {
  toggleCartVisibility,
  addItem,
};
