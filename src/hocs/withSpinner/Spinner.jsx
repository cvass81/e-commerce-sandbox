import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
