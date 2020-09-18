import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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

export default LoginButton;
