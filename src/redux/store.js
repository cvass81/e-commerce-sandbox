import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import compose from 'lodash/fp/compose';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // eslint-disable-next-line no-undef,no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? // eslint-disable-next-line no-undef,no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  ),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
