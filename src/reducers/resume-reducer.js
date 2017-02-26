import { DATA_LOADED } from '../constants';

const initialState = {
  name: '',
  contact: {},
  reume: {},
  portfolio: {}
};

export default (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case DATA_LOADED:
      nextState.name = action.name;
      nextState.resume = action.resume;
      nextState.contact = action.contact;
      return nextState;
    default:
      return state;
  }
};
