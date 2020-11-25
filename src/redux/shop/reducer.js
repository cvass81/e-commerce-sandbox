import initState from './initState';
import actionTypes from './actionTypes';
import C from './constants';

export default (state = initState, { type, value }) => {
  switch (type) {
    case actionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        [C.PROPS.COLLECTIONS]: value,
      };
    default:
      return state;
  }
};
