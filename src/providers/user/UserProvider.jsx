import React, { useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/utils';
import { UserContext } from './UserContext';

// eslint-disable-next-line import/prefer-default-export
export const UserProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>
          setUser({
            id: snapshot.id,
            ...snapshot.data(),
          }),
        );
      } else {
        setUser(null);
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return <UserContext.Provider value={user} {...props} />;
};
