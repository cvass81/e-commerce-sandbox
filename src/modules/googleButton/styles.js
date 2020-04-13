import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
    () => ({
        googleButton: {
            backgroundColor: '#3A79F2',
            borderColor: '#3A79F2',
            '&:hover, &:focus': {
                color: '#3A79F2',
            },
        },
    }),
    { name: 'GoogleButton' },
);

export default useStyles;
