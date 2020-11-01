import { createSelector } from 'reselect';
import get from 'lodash/fp/get';
import C from './constants';

const getDirectory = createSelector(get(C.REDUCER_NAME), get(C.PROPS.SECTIONS));

export default {
  getDirectory,
};
