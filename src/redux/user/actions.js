import actionTypes from './actionTypes';

const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START,
});

const emailSignInStart = emailAndPassword => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

const signInSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

const signInFailure = error => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error,
});

const checkUserSession = () => ({
  type: actionTypes.CHECK_USER_SESSION,
});

const signOutStart = () => ({
  type: actionTypes.SIGN_OUT_START,
});

const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS,
});

const signOutFailure = error => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error,
});

const signUpStart = emailPasswordDisplayName => ({
  type: actionTypes.SIGN_UP_START,
  payload: emailPasswordDisplayName,
});

const signUpSuccess = ({ user, additionalData }) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

const signUpFailure = error => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export default {
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailure,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
};
