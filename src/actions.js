import {
  FONTS_LOADED,
  RESUME_LOADED,
  SECTION_ENTER,
  TOGGLE_WELCOME
} from './constants';
import fontLoader from './bin/fontLoader';


  // –––––––––––––––––––––––––––––––––––––––––– \\
 // -~-~-~-~-~-~- ACTIONS-CREATORS -~-~-~-~-~-~- \\
// ______________________________________________ \\

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


  // –––––––––––––––––––––––––––––––––––––––––– \\
 // ~-~-~-~-~-~-~-~-~- THUNKS -~-~-~-~-~-~-~-~-~ \\
// ______________________________________________ \\

// *TODO _RESUME needs to change if running locally vs gh-pages
// '/app-about-me/public/resume.json'
const _RESUME = '/public/resume.json';

export const fetchData = () => dispatch =>
  fetch(_RESUME)
    .then( response => response.json() )
    .then( json => dispatch(resumeDidLoad(json)) )
    .then( fontLoader( () => dispatch(fontsDidLoad()) ))
    .catch( err =>
      console.log(`There was an error fetching the data. ERROR: ${err}`));
