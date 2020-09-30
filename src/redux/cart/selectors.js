import { createSelector } from 'reselect';
import get from 'lodash/fp/get';
import C from './constants';

const getCartVisible = createSelector(
  get(C.REDUCER_NAME),
  get(C.PROPS.CART_VISIBLE),
);

const getCartItems = createSelector(
  get(C.REDUCER_NAME),
  get(C.PROPS.CART_ITEMS),
);

const getCartItemsCount = createSelector([getCartItems], cartItems =>
  cartItems.reduce(
    (accumulatedQuantity, { quantity }) => accumulatedQuantity + quantity,
    0,
  ),
);

const getCartItemsTotalValue = createSelector([getCartItems], cartItems =>
  cartItems.reduce(
    (accumulatedPrice, { quantity, price }) =>
      accumulatedPrice + quantity * price,
    0,
  ),
);

export default {
  getCartVisible,
  getCartItems,
  getCartItemsCount,
  getCartItemsTotalValue,
};
