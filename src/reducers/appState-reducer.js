import {
  DATA_LOADED,
  TOGGLE_WELCOME
} from '../constants';

const initialState = {
  isLoading: true,
  welcomeIn: false
};

export default (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case TOGGLE_WELCOME:
      nextState.welcomeIn = !nextState.welcomeIn;
      return nextState;
    case DATA_LOADED:
      nextState.isLoading = false;
      return nextState;
    default:
      return state;
  }
};
