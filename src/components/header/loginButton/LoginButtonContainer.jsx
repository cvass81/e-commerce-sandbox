import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors } from '../../../redux/user';
import LoginButton from './LoginButton';

export default connect(
  createStructuredSelector({ currentUser: selectors.getCurrentUser }),
)(LoginButton);
