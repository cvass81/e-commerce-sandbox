import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors } from '../../redux/shop';

export default connect(
  createStructuredSelector({
    collections: selectors.getCollections,
  }),
);
