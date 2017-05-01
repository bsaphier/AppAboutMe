import React from 'react';

import {
  FONTS_LOADED,
  CAROUSEL_INIT,
  RESUME_LOADED,
  SECTION_ENTER,
  TOGGLE_WELCOME,
  CAROUSEL_ROTATE,
  CAROUSEL_RESIZE,
  CAROUSEL_LOAD_PANELS,
  TOGGLE_PROJECT_MODAL
} from './constants';
import fontLoader from './bin/fontLoader';
import ProjectPanel from './components/resumeComponents/projects/ProjectPanel';


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


export const createCarousel = (panelsCount, panelSize) => ({
  type: CAROUSEL_INIT,
  radius: Math.round( ( panelSize / 2 ) /
          Math.tan( Math.PI / panelsCount ) ),
  theta: 360 / panelsCount,
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


export const rotateCarousel = (rotation, currPanel) => ({
  type: CAROUSEL_ROTATE,
  currPanel,
  rotation
});


export const preloadCarouselPanels = (panels) => ({
  type: CAROUSEL_LOAD_PANELS,
  panels
});


  // ––––––––––––––––––––––––––––––––––––––––––––––––– \\
 // ~-~-~-~-~-~-~-~-~- ACTION-THUNKS -~-~-~-~-~-~-~-~-~ \\
// _____________________________________________________ \\

export const createCarouselPanels = projects => dispatch => {
  const toggleModal = () => dispatch(toggleProjectModal());
  // this guarantees that the background images have loaded before anything is displayed
  const panels = projects.map( (project) => (
    <ProjectPanel
      key={`project-panel-${project.index}`}
      project={project}
      toggleModal={toggleModal}
    />
  ));
  dispatch(preloadCarouselPanels(panels));
};


// *TODO _RESUME_PATH needs to change if running on local server vs gh-pages
// '/app-about-me/public/resume.json'
const _RESUME_PATH = '/public/resume.json';

export const fetchData = () => dispatch =>
  fetch(_RESUME_PATH)
    .then( response => response.json() )
    .then( json => { dispatch(resumeDidLoad(json)); return json; } )
    .then( ({ resume: { projects } }) => dispatch(createCarouselPanels(projects)) )
    .then( fontLoader(() => dispatch(fontsDidLoad())) )
    .catch( err => console.log(`There was an error fetching the data. ERROR: ${err}`));
