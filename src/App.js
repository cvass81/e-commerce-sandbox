import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HomePage from './components/homepage';

function App() {
    let theme = createMuiTheme({
        typography: {
            fontFamily: [
                'Open Sans Condensed',
            ].join(','),
            h5: {
                fontWeight: 600,
            },
        },
    });
    theme = responsiveFontSizes(theme);

    return (
        <>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <Container>
                    <HomePage/>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default App;
