import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Dropdown from './Dropdown';
import { selectors, actions } from '../../../../../redux/cart';

export default connect(
  createStructuredSelector({
    cartVisible: selectors.getCartVisible,
    cartItems: selectors.getCartItems,
    cartItemsCount: selectors.getCartItemsCount,
  }),
  dispatch => ({
    toggleCartVisibility: state =>
      dispatch(actions.toggleCartVisibility(state)),
  }),
)(Dropdown);
