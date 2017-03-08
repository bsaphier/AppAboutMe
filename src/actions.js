import {
  DATA_LOADED,
  SECTION_ENTER,
  TOGGLE_WELCOME
} from './constants';

//*TODO call this using waypoint events
export const sectionChange = (section) => ({
  type: SECTION_ENTER,
  section
});

export const toggleWelcome = () => ({
  type: TOGGLE_WELCOME
});

export const didLoad = ({ name, contact, resume }) => ({
  type: DATA_LOADED,
  name,
  resume,
  contact
});

// _RESUME needs to change if running locally vs gh-pages
const _RESUME = '/app-about-me/public/resume.json';
export const fetchData = () => dispatch =>
  fetch(_RESUME)
    .then( response => response.json() )
    .then( json => dispatch(didLoad(json)) )
    .catch( err =>
      console.log(`There was an error fetching the data. ERROR: ${err}`));
