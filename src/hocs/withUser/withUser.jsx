import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/user';
import { auth, createUserProfileDocument } from '../../firebase/utils';

const withUser = WrappedComponent => {
  return connect(null, dispatch => ({
    setCurrentUser: user => dispatch(actions.setCurrentUser(user)),
  }))(({ setCurrentUser }) => {
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

    return <WrappedComponent />;
  });
};

export default withUser;