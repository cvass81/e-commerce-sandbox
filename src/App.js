import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HomePage from './components/homepage';

function App() {
    return (
        <>
            <CssBaseline/>
            <Container>
                <HomePage/>
            </Container>
        </>
    );
}

export default App;
