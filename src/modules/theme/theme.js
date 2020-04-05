import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Open Sans Condensed',
        ].join(','),
        h1: {
            fontSize: '3.8rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.2rem',
        },
        h3: {
            fontSize: '2rem',
        },
        h4: {
            fontSize: '1.8rem',
            fontWeight: 600,
        },
    },
    palette: {
        grey: {
            300: '#FFFFFF',
        },
    },
    shape: {
        borderRadius: 0,
    },
    overrides: {
        MuiFormLabel: {
            root: {
                fontSize: '1.1rem',
                marginBottom: theme.spacing(2),
            },
        },
        MuiInput: {
            root: {
                fontSize: '1.1rem',
            },
            input: {
                height: '1.55rem',
            },
        },
    },
});

export default responsiveFontSizes(theme);
