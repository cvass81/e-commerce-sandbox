import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from '../styles';
import GoogleButton from '../../../modules/googleButton';
import { signInWithGoogle } from '../../../firebase/utils';

const SignIn = () => {
    const classes = useStyles();

    const handleSubmit = e => e.preventDefault();

    return (
        <>
            <Typography variant="h4">
                I already have an account
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
                Sign in with your email and password
            </Typography>
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    fullWidth
                    id="email_sign_in"
                    label="Email"
                    className={classes.textField}
                />
                <TextField
                    required
                    fullWidth
                    id="password_sign_in"
                    label="Password"
                    type="password"
                    className={classes.textField}
                />
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
                            type="submit"
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
