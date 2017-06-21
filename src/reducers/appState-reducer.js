import {
  LRG,
  RESIZED,
  FONTS_LOADED,
  RESUME_LOADED,
  SECTION_CHANGE,
  TOGGLE_WELCOME,
  TOGGLE_PROJECT_MODAL,
  CAROUSEL_LOAD_PANELS
} from '../constants';


const initialState = {
  isLoading: true,

  fontsDidLoad: false,
  resumeDidLoad: false,
  carouselPanelsDidLoad: false,

  welcomeIn: false,
  projectModalOpen: false,

  currSection: 'home',
  media: LRG
};


export default (state = initialState, action) => {

  const nextState = {...state};


  switch (action.type) {

    case RESIZED:
      nextState.media = action.nextSize;
      break;

    case FONTS_LOADED:
      nextState.fontsDidLoad = true;
      break;

    case RESUME_LOADED:
      nextState.resumeDidLoad = true;
      break;

    case CAROUSEL_LOAD_PANELS:
      nextState.carouselPanelsDidLoad = true;
      break;

    case SECTION_CHANGE:
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


  nextState.isLoading = !(nextState.fontsDidLoad && nextState.resumeDidLoad && nextState.carouselPanelsDidLoad);

  return nextState;
};
