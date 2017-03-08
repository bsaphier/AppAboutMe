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

// make a backend route to retrieve this instead of accessing the filepath
export const fetchData = () => dispatch =>
  fetch('/public/resume.json')
    .then( response => response )
    .then( json => dispatch(didLoad(json)) )
    .catch( err =>
      console.log(`There was an error fetching the data. ERROR: ${err}`));
