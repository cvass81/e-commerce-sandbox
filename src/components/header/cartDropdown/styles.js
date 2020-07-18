import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
  theme => ({
    checkoutBtnContainer: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }),
  { name: 'cartDropdown' },
);

export default useStyles;
