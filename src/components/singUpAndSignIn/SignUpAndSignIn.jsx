import React from 'react';
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SignIn from './signIn';
import SignUp from './signUp';

const SignUpAndSignIn = ({ currentUser }) => {
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <Container maxWidth="md">
      <Grid container spacing={8}>
        <Grid item sm={6} xs>
          <SignIn />
        </Grid>
        <Grid item sm={6} xs>
          <SignUp />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpAndSignIn;
