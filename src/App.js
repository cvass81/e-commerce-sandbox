import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Header from './components/header';
import User from './components/user';
import SignUpAndSignIn from './components/singUpAndSignIn';

const App = () => {
  return (
    <>
      <User />
      <Router>
        <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route exact path="/login">
            <SignUpAndSignIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
