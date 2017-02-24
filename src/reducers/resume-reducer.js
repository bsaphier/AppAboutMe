import {
  LOAD_RESUME
} from '../constants';

const initialState = {
  work: { text: 'work' },
  basics: {
    name: 'Benjamin Saphier',
    text: 'My site is currently under construction. Come back soon!'
  },
  skills: { text: 'skills' },
  education: { text: 'education' },
  portfolio: { text: 'portfolio' }
};

export default (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_RESUME:
      nextState.name = action.name;
      nextState.resume = action.resume;
      nextState.contact = action.contact;
      return nextState;
    default:
      return state;
  }
};
