import { all, call } from 'redux-saga/effects';
import { sagas as shopSagas } from './shop';
import { sagas as userSagas } from './user';

export default function* rootSaga() {
  yield all([call(shopSagas.fetchCollectionsStart), call(userSagas)]);
}
