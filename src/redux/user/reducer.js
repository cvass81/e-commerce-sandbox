import initState from './initState';
import actionTypes from './actionTypes';
import C from './constants';

export default (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        [C.PROPS.CURRENT_USER]: payload,
        [C.PROPS.SIGN_IN_ERROR]: null,
      };
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        [C.PROPS.CURRENT_USER]: null,
        [C.PROPS.SIGN_IN_ERROR]: null,
      };
    case actionTypes.SIGN_OUT_FAILURE:
    case actionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        [C.PROPS.SIGN_IN_ERROR]: payload,
      };
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        [C.PROPS.SIGN_UP_ERROR]: null,
      };
    case actionTypes.SIGN_UP_FAILURE: {
      return {
        ...state,
        [C.PROPS.SIGN_UP_ERROR]: payload,
      };
    }
    default:
      return state;
  }
};
