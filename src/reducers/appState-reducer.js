import {
  DATA_LOADED,
  SECTION_ENTER,
  TOGGLE_WELCOME
} from '../constants';

const initialState = {
  isLoading: true,
  welcomeIn: false,
  currSection: 'home'
};

export default (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case SECTION_ENTER:
    nextState.currSection = action.section;
      return nextState;
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
