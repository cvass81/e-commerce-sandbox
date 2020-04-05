import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles';

const SignUp = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h4">
                I don't have an account
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
                Sign up with your email and password
            </Typography>
        </>
    );
};

export default SignUp;
