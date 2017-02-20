import {
  DATA_LOADED
} from './constants';


export const didLoad = () => ({
  type: DATA_LOADED
});


export const fetchData = () => {
  // make a backend route to retrieve this instead of accessing the filepath
  return dispatch => {
    fetch('/public/resume.json')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch(didLoad());
      });
  };
};
