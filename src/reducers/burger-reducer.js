import { OPEN_BURGER, CLOSE_BURGER } from '../constants';


const initialState = {
  about:    true,
  projects: true
};


export default (state = initialState, action) => {

  const nextState = {...state};

  switch (action.type) {

    case OPEN_BURGER:
      nextState[action.section] = true;
      break;

    case CLOSE_BURGER:
      nextState[action.section] = false;
      break;

    default:
      return nextState;
  }

  return nextState;
};
