import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Header from './components/header';
import Theme from './modules/theme';
import SignUpAndSignIn from './components/singUpAndSignIn';

function App() {
    return (
        <Theme>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/shop">
                        <Shop/>
                    </Route>
                    <Route path="/login">
                        <SignUpAndSignIn/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </Theme>
    );
}

export default App;
