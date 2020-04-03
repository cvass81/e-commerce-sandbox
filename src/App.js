import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Home from './components/home';
import Shop from './components/shop';
import Theme from './modules/theme';

function App() {
    return (
        <Theme>
            <Router>
                <Container>
                    <Switch>
                        <Route path="/shop">
                            <Shop/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </Theme>
    );
}

export default App;
