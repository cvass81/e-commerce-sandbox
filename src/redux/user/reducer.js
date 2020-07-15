const INITIAL_STATE = {
  currentUser: null,
};

// eslint-disable-next-line import/prefer-default-export
export const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
