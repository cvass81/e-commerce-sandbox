import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useUserContext } from '../../../providers/user';
import { auth } from '../../../firebase/utils';

const LoginButton = ({ currentUser }) => {
  const signOut = () => auth.signOut();

  return currentUser ? (
    <Button color="inherit" onClick={signOut}>
      LOGOUT
    </Button>
  ) : (
    <Button color="inherit" component={Link} to="/login">
      LOGIN
    </Button>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(LoginButton);
