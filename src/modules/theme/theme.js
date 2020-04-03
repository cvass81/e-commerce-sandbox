import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Open Sans Condensed',
        ].join(','),
        h2: {
            fontWeight: 600,
            fontSize: '2.2rem',
        },
        h3: {
            fontSize: '2rem',
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
});

export default responsiveFontSizes(theme);
