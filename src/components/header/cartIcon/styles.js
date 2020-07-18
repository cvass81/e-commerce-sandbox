import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
  theme => ({
    cartButton: {
      position: 'relative',
    },
    cartAmount: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 3,
      left: 0,
      width: '100%',
      height: '100%',
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  { name: 'cartIcon' },
);

export default useStyles;
