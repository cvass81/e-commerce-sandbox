import { takeLatest, call, put } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/utils';
import actions from './actions';

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShot);
    yield put(actions.fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(actions.fetchCollectionsError(error));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(actionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync);
}

export default {
  fetchCollectionsStart,
};
