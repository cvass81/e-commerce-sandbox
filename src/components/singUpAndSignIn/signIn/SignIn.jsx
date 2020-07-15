import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from '../styles';
import GoogleButton from '../../../modules/googleButton';
import { auth, signInWithGoogle } from '../../../firebase/utils';
import * as C from './constants';

const initialState = {};
Object.keys(C).forEach(field => {
  initialState[C[field].name] = '';
});
const reducer = (state, { type, value }) => {
  if (type === 'reset') {
    return initialState;
  }
  return { ...state, [type]: value };
};

const SignIn = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e =>
    dispatch({ type: e.target.name, value: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: 'reset' });
    } catch (error) {
      console.error(error);
    }
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

export default SignIn;
