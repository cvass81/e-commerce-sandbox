import { createSelector } from 'reselect';
import get from 'lodash/fp/get';
import C from './constants';

const getDialogProps = createSelector(
  get(C.REDUCER_NAME),
  get(C.PROPS.DIALOG_PROPS),
);

export default { getDialogProps };
