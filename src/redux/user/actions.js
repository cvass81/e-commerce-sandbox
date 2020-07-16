import actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user,
});
