import { createSelector } from 'reselect';
import get from 'lodash/fp/get';
import C from './constants';

const getCollections = createSelector(
  get([C.REDUCER_NAME]),
  get([C.PROPS.COLLECTIONS]),
);

export default { getCollections };
