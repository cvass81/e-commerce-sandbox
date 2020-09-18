import actionTypes from './actionTypes';

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  value: user,
});

export default {
  setCurrentUser,
};
