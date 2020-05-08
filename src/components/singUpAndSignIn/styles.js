import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
  theme => ({
    subtitle: {
      marginBottom: theme.spacing(4),
    },
    textField: {
      marginBottom: theme.spacing(4),
    },
  }),
  { name: 'SignUpAndSignIn' },
);

export default useStyles;
