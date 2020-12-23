import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors, actions } from '../../redux/user';

export default connect(
  createStructuredSelector({
    currentUser: selectors.getCurrentUser,
    signInError: selectors.getSignInError,
  }),
  dispatch => ({
    googleSignInStart: () => dispatch(actions.googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(actions.emailSignInStart({ email, password })),
    checkUserSession: () => dispatch(actions.checkUserSession()),
    signOutStart: () => dispatch(actions.signOutStart()),
  }),
);
