import { createSelector } from 'reselect';
import get from 'lodash/fp/get';
import C from './constants';

const getCollections = createSelector(
  get([C.REDUCER_NAME]),
  get([C.PROPS.COLLECTIONS]),
);

const getIsFetching = createSelector(
  get([C.REDUCER_NAME]),
  get([C.PROPS.IS_FETCHING]),
);
const getErrorMessage = createSelector(
  get([C.REDUCER_NAME]),
  get([C.PROPS.ERROR_MESSAGE]),
);

export default { getCollections, getIsFetching, getErrorMessage };
