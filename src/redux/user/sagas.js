import { takeLatest, put, all, call } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import actions from './actions';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/utils';

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(
      actions.signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (error) {
    yield put(actions.signInFailure(error));
  }
}

function* singInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(actions.signInFailure(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(actions.signInFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(actions.signInFailure(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(actions.signOutSuccess());
  } catch (error) {
    yield put(actions.signInFailure(error));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, singInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
  yield takeLatest(actionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signOut);
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}
