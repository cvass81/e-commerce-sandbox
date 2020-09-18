import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import { selectors, actions } from '../../../../../redux/cart';

export default connect(
  state => ({
    cartVisible: selectors.getCartVisible(state),
    cartItems: selectors.getCartItems(state),
  }),
  dispatch => ({
    toggleCartVisibility: () => dispatch(actions.toggleCartVisibility),
  }),
)(Dropdown);
