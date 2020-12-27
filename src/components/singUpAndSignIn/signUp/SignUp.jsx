import React, { useEffect, useReducer } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import useStyles from '../styles';
import * as C from './constants';
import withUser from '../../../hocs/withUser';

const initialState = {};
Object.keys(C).forEach(field => {
  initialState[C[field].name] = '';
  initialState[`${C[field].name}Error`] = null;
});
const reducer = (state, { type, value }) => ({ ...state, [type]: value });

const SignUp = ({ signUpStart, signUpError }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!signUpError) {
      return;
    }

    const { code, message } = signUpError;
    switch (code) {
      case 'auth/invalid-email': {
        dispatch({ type: 'emailError', value: message });
        break;
      }
      case 'auth/weak-password': {
        dispatch({ type: 'passwordError', value: message });
        break;
      }
      case 'auth/wrong-password': {
        dispatch({ type: 'passwordError', value: message });
        break;
      }
      default:
    }
  }, [signUpError]);

  const handleChange = e => {
    dispatch({ type: e.target.name, value: e.target.value });
    if (e.target.name.includes('password')) {
      dispatch({ type: `passwordError`, value: null });
      dispatch({ type: `passwordConfirmError`, value: null });
    }
    dispatch({ type: `${e.target.name}Error`, value: null });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { displayName, email, password, passwordConfirm } = state;

    let hasFrontError = false;

    Object.values(C).forEach(({ name, label }) => {
      if (!state[name].length) {
        dispatch({
          type: `${name}Error`,
          value: `${label} is required`,
        });
        hasFrontError = true;
      }
    });
    if (password !== passwordConfirm) {
      dispatch({
        type: 'passwordError',
        value: true,
      });
      dispatch({
        type: 'passwordConfirmError',
        value: "Passwords don't match",
      });
      hasFrontError = true;
    }
    if (hasFrontError) return;

    signUpStart(email, password, displayName);
  };

  return (
    <>
      <Typography variant="h4">I don't have an account</Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Sign up with your email and password
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
        <Grid container>
          <Grid item xs={6}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              SIGN UP
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default withUser(SignUp);
