import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user';
import cart from './cart';
import dialog from './dialog';
import directory from './directory';
import shop from './shop';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user,
  cart,
  dialog,
  directory,
  shop,
});

export default persistReducer(persistConfig, rootReducer);
