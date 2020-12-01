import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import compose from 'lodash/fp/compose';
import rootReducer from './rootReducer';

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // eslint-disable-next-line no-undef,no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? // eslint-disable-next-line no-undef,no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  ),
);

export const persistor = persistStore(store);
