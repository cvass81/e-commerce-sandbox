import actionTypes from './actionTypes';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/utils';

const fetchCollectionsStart = () => ({
  type: actionTypes.FETCH_COLLECTION_START,
});

const fetchCollectionsSuccess = value => ({
  type: actionTypes.FETCH_COLLECTION_SUCCESS,
  value,
});

const fetchCollectionsError = value => ({
  type: actionTypes.FETCH_COLLECTION_SUCCESS,
  value,
});

const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then(snapshot => {
      dispatch(
        fetchCollectionsSuccess(convertCollectionsSnapshotToMap(snapshot)),
      );
    })
    .catch(error => {
      dispatch(fetchCollectionsError(error));
    });
};

export default {
  fetchCollectionsStartAsync,
};
