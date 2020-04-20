import React, { useState, useEffect, useContext } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/utils';

const UserContext = useContext();

export const UserProvider = props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            setUser(user);
            await createUserProfileDocument(user);
        });

        return () => unsubscribeFromAuth();
    }, []);

    return <UserContext.Provider value={user} {...props} />;
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
