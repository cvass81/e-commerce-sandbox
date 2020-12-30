import React, { useEffect, useReducer } from 'react';
import mapValues from 'lodash/mapValues';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import useStyles from '../styles';
import C from './constants';
import withUser from '../../../hocs/withUser';

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
        [action.name]: {
          ...state[action.name],
          error: action.value,
        },
      };
    }
    default: {
      return state;
    }
  }
};

const SignUp = ({ signUpStart, signUpError }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setValue = (name, value) =>
    dispatch({ type: 'SET_VALUE', name, value });
  const setError = (name, value) =>
    dispatch({ type: 'SET_ERROR', name, value });
  const removePasswordErrors = () => {
    setError('password', null);
    setError('passwordConfirm', null);
  };
  const setPasswordsDontMatchError = () => {
    setError('password', ' ');
    setError('passwordConfirm', "Passwords don't match");
  };

  useEffect(() => {
    if (!signUpError) {
      return;
    }

    const { code, message } = signUpError;
    switch (code) {
      case 'auth/invalid-email': {
        setError('emailError', message);
        break;
      }
      case 'auth/wrong-password':
      case 'auth/weak-password': {
        setError('passwordError', message);
        break;
      }
      default:
    }
  }, [signUpError]);

  const handleChange = ({ target: { name, value } }) => {
    setValue(name, value);
    name.includes('password') && removePasswordErrors();
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { displayName, email, password, passwordConfirm } = state;

    const hasError = Boolean(
      Object.keys(state).filter(name => {
        const hasValue = Boolean(state[name].value.length);
        hasValue || setError(name, 'Field is required');
        return !hasValue;
      }).length,
    );

    if (hasError) return;

    if (password !== passwordConfirm) {
      setPasswordsDontMatchError();
      return;
    }

    signUpStart(email, password, displayName);
  };

  return (
    <>
      <Typography variant="h4">I don't have an account</Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Sign up with your email and password
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
