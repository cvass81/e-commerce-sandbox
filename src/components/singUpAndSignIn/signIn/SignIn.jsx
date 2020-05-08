import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from '../styles';
import GoogleButton from '../../../modules/googleButton';
import { signInWithGoogle } from '../../../firebase/utils';
import * as C from './constants';

const SignIn = () => {
  const classes = useStyles();

  const handleSubmit = e => e.preventDefault();

  return (
    <>
      <Typography variant="h4">I already have an account</Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Sign in with your email and password
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        {Object.keys(C).map(field => (
          <TextField
            className={classes.textField}
            required
            fullWidth
            key={C[field].id}
            {...C[field]}
          />
        ))}
        <Grid container spacing={2}>
          <Grid item xs>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              SIGN IN
            </Button>
          </Grid>
          <Grid item xs>
            <GoogleButton
              onClick={signInWithGoogle}
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              SIGN IN WITH GOOGLE
            </GoogleButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SignIn;
