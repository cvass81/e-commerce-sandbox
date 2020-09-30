import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors } from '../../redux/user';
import SignUpAndSignIn from './SignUpAndSignIn';

export default connect(
  createStructuredSelector({ currentUser: selectors.getCurrentUser }),
)(SignUpAndSignIn);
