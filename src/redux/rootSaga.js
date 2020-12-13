import { all, call } from 'redux-saga/effects';
import { sagas as shopSagas } from './shop';

export default function* rootSaga() {
  yield all([call(shopSagas.fetchCollectionsStart)]);
}
