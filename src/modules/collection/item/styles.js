import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
  theme => ({
    wrapper: {
      width: '100%',
      position: 'relative',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      '&:after': {
        content: '""',
        display: 'block',
        paddingBottom: '112%',
      },
      '&:hover > $bg': {
        opacity: 0.85,
      },
      '&:hover > $button, &:focus > $button': {
        display: 'block',
      },
    },
    bg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    button: {
      display: 'none',
      opacity: 0.9,
    },
    specifics: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
  { name: 'Item' },
);

export default useStyles;
