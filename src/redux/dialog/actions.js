import actionTypes from './actionTypes';

const showDialog = value => ({
  type: actionTypes.SHOW_DIALOG,
  value,
});

const hideDialog = () => ({
  type: actionTypes.HIDE_DIALOG,
});

export default {
  showDialog,
  hideDialog,
};
