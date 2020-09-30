import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Checkout from './Checkout';
import { selectors } from '../../redux/cart';

export default connect(
  createStructuredSelector({
    cartItems: selectors.getCartItems,
    cartItemsTotalValue: selectors.getCartItemsTotalValue,
  }),
)(Checkout);
