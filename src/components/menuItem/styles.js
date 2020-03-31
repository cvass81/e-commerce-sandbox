import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
    {
        paper: {
            width: '100%',
            position: 'relative',
            '&:after': {
                content: '""',
                display: 'block',
                paddingBottom: '72%',
            },
        },
        content: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        },
    },
    {name: 'MenuItem'}
);

export default useStyles;
