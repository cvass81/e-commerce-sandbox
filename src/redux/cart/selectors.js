import getOr from 'lodash/fp/getOr';
import initState from './initState';
import C from './constants';

const getCartVisible = getOr(initState[C.PROPS.CART_VISIBLE], [
  C.REDUCER_NAME,
  C.PROPS.CART_VISIBLE,
]);

const getCartItems = getOr(initState[C.PROPS.CART_ITEMS], [
  C.REDUCER_NAME,
  C.PROPS.CART_ITEMS,
]);

export default { getCartVisible, getCartItems };
