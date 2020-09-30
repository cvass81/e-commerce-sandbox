import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
  theme => ({
    checkoutBtnContainer: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(10),
      marginRight: theme.spacing(2),
    },
    emptyCartContainer: {
      position: 'relative',
    },
    emptyCartFiller: {
      visibility: 'hidden',
    },
    emptyCart: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  { name: 'cartDropdown' },
);

export default useStyles;
