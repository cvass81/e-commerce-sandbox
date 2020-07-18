import React from 'react';
import MuiPaper from '@material-ui/core/Paper';

const Paper = React.forwardRef((props, ref) => (
  <MuiPaper ref={ref} variant="outlined" square {...props} />
));

export default Paper;
