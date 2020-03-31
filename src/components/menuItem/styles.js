import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
    {
        paper: {
            width: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '&:after': {
                content: '""',
                display: 'block',
                paddingBottom: '78%',
            },
        },
    },
    {name: 'MenuItem'}
);

export default useStyles;
