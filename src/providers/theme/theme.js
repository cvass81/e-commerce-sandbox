import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Open Sans Condensed'].join(','),
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
        primary: {
            main: '#000000',
        },
    },
    shape: {
        borderRadius: 0,
    },
    overrides: {
        MuiFormLabel: {
            root: {
                fontSize: '1.1rem',
            },
        },
        MuiInput: {
            root: {
                fontSize: '1.1rem',
            },
            input: {
                height: '1.65rem',
            },
        },
        MuiButton: {
            root: {
                whiteSpace: 'nowrap',
            },
            containedPrimary: {
                border: '1px solid #000000',
                '&$focusVisible': {
                    '& .MuiTouchRipple-ripple': {
                        display: 'none',
                    },
                },
                '&:hover, &:focus': {
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                },
            },
            focusVisible: {},
        },
    },
    props: {
        MuiButton: {
            disableElevation: true,
        },
    },
});

export default responsiveFontSizes(theme);
