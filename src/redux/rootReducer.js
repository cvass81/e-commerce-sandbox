import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user';
import cart from './cart';
import dialog from './dialog';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user,
  cart,
  dialog,
});

export default persistReducer(persistConfig, rootReducer);
