import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors, actions } from '../../redux/user';

export default connect(
  createStructuredSelector({ currentUser: selectors.getCurrentUser }),
  dispatch => ({
    setCurrentUser: user => dispatch(actions.setCurrentUser(user)),
  }),
);
