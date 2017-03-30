import {
  FONTS_LOADED,
  RESUME_LOADED,
  SECTION_ENTER,
  TOGGLE_WELCOME,
  TOGGLE_PROJECT_MODAL
} from '../constants';


const initialState = {
  isLoading: true,
  welcomeIn: false,
  fontsDidLoad: false,
  resumeDidLoad: false,
  projectModalOpen: false,
  currSection: 'home'
};


export default (state = initialState, action) => {

  const nextState = {...state};


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

    case TOGGLE_PROJECT_MODAL:
      nextState.projectModalOpen = !nextState.projectModalOpen;
      break;

    default:
      return nextState;
  }


  nextState.isLoading = !(nextState.fontsDidLoad && nextState.resumeDidLoad);

  return nextState;
};
