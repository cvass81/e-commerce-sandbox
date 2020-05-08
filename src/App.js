import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Header from './components/header';
import Theme from './providers/theme';
import SignUpAndSignIn from './components/singUpAndSignIn';
import { UserProvider } from './providers/user';

function App() {
  return (
    <Theme>
      <UserProvider>
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
      </UserProvider>
    </Theme>
  );
}

export default App;
