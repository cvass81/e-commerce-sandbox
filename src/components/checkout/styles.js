import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
  theme => ({
    image: {
      width: 120,
    },
    col: {
      width: '25%',
    },
    minWidthCol: {
      width: 1,
    },
    total: {
      marginTop: theme.spacing(2),
    },
  }),
  { name: 'Checkout' },
);

export default useStyles;
