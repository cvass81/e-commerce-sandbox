import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
    {
        square: {
            width: '100%',
            '&:after': {
                content: '""',
                display: 'block',
                paddingBottom: '100%',
            },
        },
    },
    {name: 'MenuItem'}
);

export default useStyles;
