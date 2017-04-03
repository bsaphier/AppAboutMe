import {
  FONTS_LOADED,
  CAROUSEL_INIT,
  RESUME_LOADED,
  SECTION_ENTER,
  TOGGLE_WELCOME,
  CAROUSEL_ROTATE,
  CAROUSEL_RESIZE,
  CAROUSEL_LOADED,
  TOGGLE_PROJECT_MODAL
} from './constants';
import fontLoader from './bin/fontLoader';


  // ––––––––––––––––––––––––––––––––––––––––– \\
 // -~-~-~-~-~-~- ACTION-CREATORS -~-~-~-~-~-~- \\
// _____________________________________________ \\

// *TODO call this using waypoint events
export const sectionChange = (section) => ({
  type: SECTION_ENTER,
  section
});

export const toggleWelcome = () => ({
  type: TOGGLE_WELCOME
});

export const fontsDidLoad = () => ({
  type: FONTS_LOADED
});

export const resumeDidLoad = ({ name, contact, resume }) => ({
  type: RESUME_LOADED,
  name,
  resume,
  contact
});

export const toggleProjectModal = () => ({
  type: TOGGLE_PROJECT_MODAL
});

export const createCarousel = (panels, panelSize) => ({
  type: CAROUSEL_INIT,
  radius: Math.round( ( panelSize / 2 ) /
          Math.tan( Math.PI / panels.length ) ),
  theta: 360 / panels.length,
  currPanel: 0,
  panelSize
});

export const resizeCarousel = (panelsCount, panelSize) => ({
  type: CAROUSEL_RESIZE,
  radius: Math.round( ( panelSize / 2 ) /
    Math.tan( Math.PI / panelsCount ) ),
  panelsCount,
  panelSize
});

//:TODO fix this so this action only needs one arg - an int that
// means how many panels to move - i.e. "-2" to go back two panels
export const rotateCarousel = (rotation, currPanel) => ({
  type: CAROUSEL_ROTATE,
  currPanel,
  rotation
});


  // ––––––––––––––––––––––––––––––––––––––––––––––––– \\
 // ~-~-~-~-~-~-~-~-~- ACTION-THUNKS -~-~-~-~-~-~-~-~-~ \\
// _____________________________________________________ \\

// *TODO _RESUME_PATH needs to change if running on local server vs gh-pages
// '/app-about-me/public/resume.json'
const _RESUME_PATH = '/public/resume.json';

export const fetchData = () => dispatch =>
  fetch(_RESUME_PATH)
    .then( response => response.json() )
    .then( json => dispatch(resumeDidLoad(json)) )
    .then( fontLoader(() => dispatch(fontsDidLoad())) )
    .catch( err => console.log(`There was an error fetching the data. ERROR: ${err}`));
