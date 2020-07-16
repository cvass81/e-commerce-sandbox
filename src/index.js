import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import Theme from './providers/theme';
import App from './App';
import './index.css';

ReactDOM.render(
  <Theme>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Theme>,
  document.getElementById('root'),
);
