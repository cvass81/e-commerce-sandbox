import { createStore } from 'redux';
import compose from 'lodash/fp/compose';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  compose(
    // eslint-disable-next-line no-undef,no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? // eslint-disable-next-line no-undef,no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  ),
);

export default store;
