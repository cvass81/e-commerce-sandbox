import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(
  {
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '0.1vh',
    },
  },
  { name: 'Spinner' },
);

export default useStyles;
