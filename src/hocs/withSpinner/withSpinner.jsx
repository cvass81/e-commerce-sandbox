import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const withSpinner = WrappedComponent => ({ isLoading, ...props }) =>
  isLoading ? <CircularProgress /> : <WrappedComponent {...props} />;

export default withSpinner;
