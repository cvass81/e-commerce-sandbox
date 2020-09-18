import { connect } from 'react-redux';
import { actions } from '../../redux/user';
import User from './User';

export default connect(null, dispatch => ({
  setCurrentUser: user => dispatch(actions.setCurrentUser(user)),
}))(User);
