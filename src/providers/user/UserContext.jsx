import { createContext, useContext } from 'react';

export const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserProvider must be used within a UserProvider');
  }
  return context;
};

UserContext.displayName = 'UserContext';
