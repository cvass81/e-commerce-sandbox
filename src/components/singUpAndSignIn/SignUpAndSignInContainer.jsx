import { connect } from 'react-redux';
import { selectors } from '../../redux/user';
import SignUpAndSignIn from './SignUpAndSignIn';

export default connect(state => ({
  currentUser: selectors.getCurrentUser(state),
}))(SignUpAndSignIn);
