import getOr from 'lodash/fp/getOr';
import initState from './initState';
import C from './constants';

const getCurrentUser = getOr(initState[C.PROPS.CURRENT_USER], [
  C.REDUCER_NAME,
  C.PROPS.CURRENT_USER,
]);

export default { getCurrentUser };
