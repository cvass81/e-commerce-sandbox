import { createSelector } from 'reselect';
import get from 'lodash/fp/get';
import C from './constants';

const getCurrentUser = createSelector(
  get(C.REDUCER_NAME),
  get(C.PROPS.CURRENT_USER),
);

const getSignInError = createSelector(
  get(C.REDUCER_NAME),
  get(C.PROPS.SIGN_IN_ERROR),
);

export default { getCurrentUser, getSignInError };
