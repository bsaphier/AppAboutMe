import {
  DATA_LOADED,
  LOAD_RESUME
} from './constants';


export const didLoad = () => ({
  type: DATA_LOADED
});

export const loadResume = ({ name, contact, resume }) => ({
  type: LOAD_RESUME,
  name,
  resume,
  contact
});


export const fetchData = () => {
  // make a backend route to retrieve this instead of accessing the filepath
  return dispatch => {
    fetch('/public/resume.json')
      .then( response => response.json() )
      .then( json => dispatch(loadResume(json)) )
      .then( () => dispatch(didLoad()) );
  };
};
