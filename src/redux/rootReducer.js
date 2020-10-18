import { combineReducers } from 'redux';
import user from './user';
import cart from './cart';
import dialog from './dialog';

export default combineReducers({
  user,
  cart,
  dialog,
});
