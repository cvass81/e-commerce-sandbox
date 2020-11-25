import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from '../../redux/shop';

export default connect(
  createStructuredSelector({
    collections: selectors.getCollections,
  }),
  dispatch => ({
    updateCollections: state => dispatch(actions.updateCollections(state)),
  }),
);
