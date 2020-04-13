import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SignIn from './signIn';
import SignUp from './signUp';
import { UserContext } from '../../providers/user';

const SignUpAndSignIn = () => {
    // TODO: user exists as an example here. To be removed
    const user = useContext(UserContext);
    return (
        <Container maxWidth="md">
            <Grid container spacing={8}>
                <Grid item sm={6} xs>
                    <SignIn />
                </Grid>
                <Grid item sm={6} xs>
                    <SignUp />
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignUpAndSignIn;
