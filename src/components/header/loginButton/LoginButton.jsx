import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useUserContext } from '../../../providers/user';
import { auth } from '../../../firebase/utils';

const LoginButton = () => {
  const user = useUserContext();
  const signOut = () => auth.signOut();

  return user ? (
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
