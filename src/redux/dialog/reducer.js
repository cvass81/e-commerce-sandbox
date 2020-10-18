import initState from './initState';
import actionTypes from './actionTypes';
import C from './constants';

export default (state = initState, { type, value }) => {
  switch (type) {
    case actionTypes.SHOW_DIALOG:
      return {
        ...state,
        [C.PROPS.DIALOG_PROPS]: value,
      };
    case actionTypes.HIDE_DIALOG:
      return {
        ...state,
        [C.PROPS.DIALOG_PROPS]: null,
      };
    default:
      return state;
  }
};
