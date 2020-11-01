import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors } from '../../redux/directory';

export default connect(
  createStructuredSelector({
    sections: selectors.getDirectory,
  }),
);
