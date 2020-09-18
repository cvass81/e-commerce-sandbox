import { connect } from 'react-redux';
import { selectors } from '../../../redux/user';
import LoginButton from './LoginButton';

export default connect(state => ({
  currentUser: selectors.getCurrentUser(state),
}))(LoginButton);
