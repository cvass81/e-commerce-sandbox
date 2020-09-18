import actionTypes from './actionTypes';
import initState from './initState';
import C from './constants';

export default (state = initState, { type, value }) => {
  switch (type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        [C.PROPS.CURRENT_USER]: value,
      };
    default:
      return state;
  }
};
