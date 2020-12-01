import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from '../../redux/shop';

export default connect(
  createStructuredSelector({
    collections: selectors.getCollections,
    isFetching: selectors.getIsFetching,
    errorMessage: selectors.getErrorMessage,
  }),
  dispatch => ({
    fetchCollectionsStartAsync: () =>
      dispatch(actions.fetchCollectionsStartAsync()),
  }),
);
