import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { auth, createUserProfileDocument } from '../../../firebase/utils';
import withUser from '../../../hocs/withUser';

const LoginButton = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          }),
        );
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  const signOut = () => auth.signOut();

  return currentUser ? (
    <Button color="inherit" onClick={signOut}>
      LOGOUT
    </Button>
  ) : (
    <Button color="inherit" component={Link} to="/login">
      LOGIN
    </Button>
  );
};

export default withUser(LoginButton);
