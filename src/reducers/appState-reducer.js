import {
  DATA_LOADED
} from '../constants';

const initialState = {
  isLoading: true
};

export default (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case DATA_LOADED:
      nextState.isLoading = false;
      return nextState;
    default:
      return state;
  }
};
