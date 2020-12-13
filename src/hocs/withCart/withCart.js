import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from '../../redux/cart';

export default connect(
  createStructuredSelector({
    cartVisible: selectors.getCartVisible,
    cartItems: selectors.getCartItems,
    cartItemsCount: selectors.getCartItemsCount,
    cartItemsTotalValue: selectors.getCartItemsTotalValue,
  }),
  dispatch => ({
    toggleCartVisibility: state =>
      dispatch(actions.toggleCartVisibility(state)),
    addItemToCart: state => dispatch(actions.addItemToCart(state)),
    changeItemQuantity: state => dispatch(actions.changeItemQuantity(state)),
    clearItemFromCart: state => dispatch(actions.clearItemFromCart(state)),
  }),
);
