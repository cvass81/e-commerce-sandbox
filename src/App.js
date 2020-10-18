import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withUser from './hocs/withUser';
import Home from './components/home';
import Shop from './components/shop';
import Header from './components/header';
import SignUpAndSignIn from './components/singUpAndSignIn';
import Checkout from './components/checkout';
import { DialogBox } from './hocs/withDialog';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route exact path="/login">
          <SignUpAndSignIn />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <DialogBox />
    </Router>
  );
};

export default withUser(App);
