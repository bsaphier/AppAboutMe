import {
  DATA_LOADED,
  TOGGLE_WELCOME
} from './constants';

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
    .then( response => response.json() )
    .then( json => dispatch(didLoad(json)) )
    .catch( err =>
      console.log(`There was an error fetching the data. ERROR: ${err}`));
