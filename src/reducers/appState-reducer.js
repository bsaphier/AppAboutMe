import {
  FONTS_LOADED,
  RESUME_LOADED,
  SECTION_ENTER,
  TOGGLE_WELCOME
} from '../constants';


const initialState = {
  isLoading: true,
  welcomeIn: false,
  fontsDidLoad: false,
  resumeDidLoad: false,
  currSection: 'home'
};


export default (state = initialState, action) => {

  const nextState = Object.assign({}, state);


  switch (action.type) {

    case FONTS_LOADED:
      nextState.fontsDidLoad = true;
      break;

    case RESUME_LOADED:
      nextState.resumeDidLoad = true;
      break;

    case SECTION_ENTER:
      nextState.currSection = action.section;
      break;

    case TOGGLE_WELCOME:
      nextState.welcomeIn = !nextState.welcomeIn;
      break;

    default:
      return nextState;
  }


  nextState.isLoading = !(nextState.fontsDidLoad && nextState.resumeDidLoad);

  return nextState;
};
