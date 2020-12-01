import initState from './initState';
import actionTypes from './actionTypes';
import C from './constants';

export default (state = initState, { type, value }) => {
  switch (type) {
    case actionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        [C.PROPS.IS_FETCHING]: true,
      };
    case actionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        [C.PROPS.IS_FETCHING]: false,
        [C.PROPS.COLLECTIONS]: value,
      };
    case actionTypes.FETCH_COLLECTION_ERROR:
      return {
        ...state,
        [C.PROPS.IS_FETCHING]: false,
        [C.PROPS.ERROR_MESSAGE]: value,
      };
    default:
      return state;
  }
};
