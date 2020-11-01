import { connect } from 'react-redux';
import { actions } from '../../../redux/cart';
import Item from './Item';

export default connect(null, dispatch => ({
  addItemToCart: state => dispatch(actions.addItemToCart(state)),
}))(Item);
