import {
  FONTS_LOADED,
  CAROUSEL_INIT,
  RESUME_LOADED,
  SECTION_ENTER,
  TOGGLE_WELCOME,
  CAROUSEL_ROTATE,
  CAROUSEL_RESIZE
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


export const createCarousel = (panelsCount, panelSize) => ({
  type: CAROUSEL_INIT,
  panelsCount,
  panelSize
});

export const rotateCarousel = (direction) => ({
  type: CAROUSEL_ROTATE,
  direction
});

export const resizeCarousel = (panelsCount, panelSize) => ({
  type: CAROUSEL_RESIZE,
  panelsCount,
  panelSize
});


  // ––––––––––––––––––––––––––––––––––––––––––––––––– \\
 // ~-~-~-~-~-~-~-~-~- ACTION-THUNKS -~-~-~-~-~-~-~-~-~ \\
// _____________________________________________________ \\

// *TODO _RESUME needs to change if running locally vs gh-pages
// '/app-about-me/public/resume.json'
const _RESUME = '/public/resume.json';

export const fetchData = () => dispatch =>
  fetch(_RESUME)
    .then( response => response.json() )
    .then( json => dispatch(resumeDidLoad(json)) )
    .then( fontLoader(() => dispatch(fontsDidLoad())) )
    .catch( err => console.log(`There was an error fetching the data. ERROR: ${err}`));
