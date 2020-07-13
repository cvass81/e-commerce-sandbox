import React, { useReducer } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import useStyles from '../styles';
import * as C from './constants';
import { auth, createUserProfileDocument } from '../../../firebase/utils';

const initialState = {};
Object.keys(C).forEach(field => {
  initialState[C[field].name] = '';
});
const reducer = (state, { field, value }) => ({ ...state, [field]: value });

const SignUp = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e =>
    dispatch({ field: e.target.name, value: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, passwordConfirm } = state;
    if (password !== passwordConfirm) {
      console.log('passwords dont match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
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

export default SignUp;
