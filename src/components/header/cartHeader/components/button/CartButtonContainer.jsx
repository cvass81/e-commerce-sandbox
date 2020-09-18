import { connect } from 'react-redux';
import CartButton from './CartButton';
import { actions } from '../../../../../redux/cart';

export default connect(null, dispatch => ({
  toggleCartVisibility: () => dispatch(actions.toggleCartVisibility),
}))(CartButton);
