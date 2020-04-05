import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles';

const SignIn = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h4">
                I already have an account
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
                Sign in with your email and password
            </Typography>
            <form noValidate autoComplete="off">
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
            </form>
        </>
    );
};

export default SignIn;
