import { OPEN_BURGER, CLOSE_BURGER } from '../constants';


const initialState = {
  about:    true,
  projects: true
};


export default (state = initialState, action) => {

  const nextState = {...state};

  switch (action.type) {

    case OPEN_BURGER:

      if (!action.section) {
        for (let section in nextState) {
          nextState[section] = true;
        }
      } else {
        nextState[action.section] = true;
      }
      break;

    case CLOSE_BURGER:

      if (!action.section) {
        for (let section in nextState) {
          nextState[section] = false;
        }
      } else {
        nextState[action.section] = false;
      }
      break;

    default:
      return nextState;

  }


  return nextState;
};
