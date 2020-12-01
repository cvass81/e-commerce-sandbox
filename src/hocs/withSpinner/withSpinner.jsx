import React from 'react';
import Spinner from './Spinner';

const withSpinner = WrappedComponent => ({ isLoading, ...props }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...props} />;

export default withSpinner;
