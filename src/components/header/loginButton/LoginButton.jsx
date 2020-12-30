import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import withUser from '../../../hocs/withUser';

const LoginButton = ({ currentUser, checkUserSession, signOutStart }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return currentUser ? (
    <Button color="inherit" onClick={signOutStart}>
      LOGOUT
    </Button>
  ) : (
    <Button color="inherit" component={Link} to="/login">
      LOGIN
    </Button>
  );
};

export default withUser(LoginButton);
