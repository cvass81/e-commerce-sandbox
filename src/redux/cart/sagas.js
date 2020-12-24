import { all, call, takeLatest, put } from 'redux-saga/effects';
import actionTypes from '../user/actionTypes';
import actions from './actions';

function* clearCartOnSignOut() {
  yield put(actions.clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
