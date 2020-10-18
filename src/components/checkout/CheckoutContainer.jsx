import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Checkout from './Checkout';
import { selectors, actions } from '../../redux/cart';

export default connect(
  createStructuredSelector({
    cartItems: selectors.getCartItems,
    cartItemsTotalValue: selectors.getCartItemsTotalValue,
  }),
  dispatch => ({
    clearItemFromCart: state => dispatch(actions.clearItemFromCart(state)),
    changeItemQuantity: state => dispatch(actions.changeItemQuantity(state)),
  }),
)(Checkout);
