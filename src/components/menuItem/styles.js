import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(theme => (
        {
            wrapper: {
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                '&:after': {
                    content: '""',
                    display: 'block',
                    paddingBottom: '72%',
                },
                '&:hover > $bg': {
                    transform: 'scale(1.1)',
                    transitionDuration: '.6s',
                },
                '&:hover > $content': {
                    opacity: 0.7,
                },
            },
            bg: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                transition: 'transform .3s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
            },
            content: {
                padding: theme.spacing(1),
                opacity: 0.8,
            },
        }),
    {name: 'MenuItem'}
);

export default useStyles;
