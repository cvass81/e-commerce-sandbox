import React, { useState, useEffect } from 'react';
import UserContext from './UserContext.jsx';
import { auth } from '../../firebase/utils';

const UserProvider = props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(user =>
            setUser(user),
        );

        return () => unsubscribeFromAuth();
    }, []);

    return <UserContext.Provider value={user} {...props} />;
};

export default UserProvider;
