import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from '../../firebase/utils';
import { setCurrentUser } from './actions';

const User = ({ setCurrentUser }) => {
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

  return <Fragment />;
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(User);
