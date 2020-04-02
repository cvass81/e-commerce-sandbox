import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Open Sans Condensed',
        ].join(','),
        h5: {
            fontWeight: 600,
        },
    },
});

export default responsiveFontSizes(theme);
