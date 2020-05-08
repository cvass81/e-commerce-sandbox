import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
  theme => ({
    appBar: {
      marginBottom: theme.spacing(3),
    },
  }),
  { name: 'Header' },
);

export default useStyles;
