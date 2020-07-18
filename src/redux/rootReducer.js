import { combineReducers } from 'redux';
import { reducer as userReducer } from './user';
import { reducer as cartReducer } from './cart';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
