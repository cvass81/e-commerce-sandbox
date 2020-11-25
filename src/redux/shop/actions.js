import ActionTypes from './actionTypes';

const updateCollections = value => ({
  type: ActionTypes.UPDATE_COLLECTIONS,
  value,
});

export default {
  updateCollections,
};
