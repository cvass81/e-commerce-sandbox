import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from '../../redux/dialog';

export default connect(
  createStructuredSelector({
    dialogProps: selectors.getDialogProps,
  }),
  dispatch => ({
    showDialog: state => dispatch(actions.showDialog(state)),
    hideDialog: () => dispatch(actions.hideDialog()),
  }),
);
