import React, { useReducer, useEffect } from 'react';
import mapValues from 'lodash/mapValues';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import withUser from '../../../hocs/withUser';
import useStyles from '../styles';
import GoogleButton from '../../../modules/googleButton';
import C from './constants';

const INITIAL_STATE = mapValues(C, () => ({ value: '', error: null }));

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESET': {
      return INITIAL_STATE;
    }
    case 'SET_VALUE': {
      return {
        ...state,
        [action.name]: { error: null, value: action.value },
      };
    }
    case 'SET_ERROR': {
      return {
        ...state,
        [action.name]: { ...state[action.name], error: action.value },
      };
    }
    default: {
      return state;
    }
  }
};

const SignIn = ({ googleSignInStart, emailSignInStart, signInError }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    if (!signInError) {
      return;
    }

    const { code, message } = signInError;
    switch (code) {
      case 'auth/invalid-email': {
        dispatch({ type: 'SET_ERROR', name: 'email', value: message });
        break;
      }
      case 'auth/user-not-found': {
        dispatch({ type: 'SET_ERROR', name: 'email', value: 'User not found' });
        break;
      }
      case 'auth/wrong-password': {
        dispatch({ type: 'SET_ERROR', name: 'password', value: message });
        break;
      }
      default:
    }
  }, [signInError]);

  const handleChange = ({ target: { name, value } }) =>
    dispatch({ type: 'SET_VALUE', name, value });

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = state;
    emailSignInStart(email.value, password.value);
  };

  return (
    <>
      <Typography variant="h4">I already have an account</Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Sign in with your email and password
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        {Object.values(C).map(field => (
          <TextField
            className={classes.textField}
            fullWidth
            onChange={handleChange}
            key={field.id}
            value={state[field.name].value}
            error={Boolean(state[field.name].error)}
            helperText={state[field.name].error}
            {...field}
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
