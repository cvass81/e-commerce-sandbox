import React, { useReducer, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import withUser from '../../../hocs/withUser';
import useStyles from '../styles';
import GoogleButton from '../../../modules/googleButton';
import * as C from './constants';

const initialState = {};
Object.keys(C).forEach(field => {
  initialState[C[field].name] = '';
  initialState[`${C[field].name}Error`] = null;
});
const reducer = (state, { type, value }) => {
  if (type === 'reset') {
    return initialState;
  }
  return { ...state, [type]: value };
};

const SignIn = ({ googleSignInStart, emailSignInStart, signInError }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!signInError) {
      return;
    }

    const { code, message } = signInError;
    switch (code) {
      case 'auth/invalid-email': {
        dispatch({ type: 'emailError', value: message });
        break;
      }
      case 'auth/user-not-found': {
        dispatch({ type: 'emailError', value: 'User not found' });
        break;
      }
      case 'auth/wrong-password': {
        dispatch({ type: 'passwordError', value: message });
        break;
      }
      default:
    }
  }, [signInError]);

  const handleChange = e => {
    dispatch({ type: e.target.name, value: e.target.value });
    dispatch({ type: `${e.target.name}Error`, value: null });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = state;
    emailSignInStart(email, password);
  };

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
            onChange={handleChange}
            key={C[field].id}
            value={state[C[field].name]}
            error={Boolean(state[`${C[field].name}Error`])}
            helperText={state[`${C[field].name}Error`]}
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
              onClick={googleSignInStart}
              type="button"
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

export default withUser(SignIn);
