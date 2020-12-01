import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Header from './components/header';
import SignUpAndSignIn from './components/singUpAndSignIn';
import Checkout from './components/checkout';
import { DialogBox } from './hocs/withDialog';

const App = () => (
  <Router>
    <Header />
    <main className="main">
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route exact path="/login" component={SignUpAndSignIn} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
    <DialogBox />
  </Router>
);

export default App;
