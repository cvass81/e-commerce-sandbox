import { all, call } from 'redux-saga/effects';
import { sagas as shopSagas } from './shop';
import { sagas as userSagas } from './user';
import { sagas as cartSagas } from './cart';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
