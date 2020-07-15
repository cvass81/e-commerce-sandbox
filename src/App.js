import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Header from './components/header';
import Theme from './providers/theme';
import SignUpAndSignIn from './components/singUpAndSignIn';
import store from './redux/store';
import User from './redux/user';

const App = () => {
  return (
    <Theme>
      <ReduxProvider store={store}>
        <User />
        <Router>
          <Header />
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/login">
              <SignUpAndSignIn />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ReduxProvider>
    </Theme>
  );
};

export default App;
