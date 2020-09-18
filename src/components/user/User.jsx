import React, { useEffect } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/utils';

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

  return <></>;
};

export default User;
