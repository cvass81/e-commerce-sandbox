import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartButton from './CartButton';
import { actions, selectors } from '../../../../../redux/cart';

export default connect(
  createStructuredSelector({
    cartItemsCount: selectors.getCartItemsCount,
  }),
  dispatch => ({
    toggleCartVisibility: state =>
      dispatch(actions.toggleCartVisibility(state)),
  }),
)(CartButton);
