import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Home from './components/homepage';
import Theme from './modules/theme';

function App() {
    return (
        <Theme>
            <Router>
                <Container>
                    <Switch>
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
