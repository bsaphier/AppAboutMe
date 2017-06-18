import React from 'react';

import {
  OPEN_BURGER,
  CLOSE_BURGER,
  FONTS_LOADED,
  CAROUSEL_INIT,
  RESUME_LOADED,
  SECTION_CHANGE,
  TOGGLE_WELCOME,
  CAROUSEL_ROTATE,
  CAROUSEL_RESIZE,
  CAROUSEL_LOAD_PANELS,
  TOGGLE_PROJECT_MODAL,
  CAROUSEL_ROTATE_AXIS
} from './constants';
import fontLoader from './bin/fontLoader';
import ProjectPanel from './components/resumeComponents/projects/ProjectPanel';


  // ––––––––––––––––––––––––––––––––––––––––– \\
 // -~-~-~-~-~-~- ACTION-CREATORS -~-~-~-~-~-~- \\
// _____________________________________________ \\

export const sectionChange = (section) => ({
  type: SECTION_CHANGE,
  section
});


export const openBurger = (section) => ({
  type: OPEN_BURGER,
  section
});


export const closeBurger = (section) => ({
  type: CLOSE_BURGER,
  section
});


export const toggleWelcome = () => ({
  type: TOGGLE_WELCOME
});


export const fontsDidLoad = () => ({
  type: FONTS_LOADED
});


export const resumeDidLoad = ({ name, contact, resume, siteInfo }) => ({
  type: RESUME_LOADED,
  name,
  resume,
  contact,
  siteInfo
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


export const rotateAxisCarousel = ( axis = 'Y' ) => ({
  type: CAROUSEL_ROTATE_AXIS,
  axis
});


  // ––––––––––––––––––––––––––––––––––––––––––––––––– \\
 // ~-~-~-~-~-~-~-~-~- ACTION-THUNKS -~-~-~-~-~-~-~-~-~ \\
// _____________________________________________________ \\

// this guarantees that the background images have loaded before anything is displayed
export const carouselPanelsCreator = projects => dispatch => {

  const toggleModal = () => dispatch(toggleProjectModal());

  const panels = projects.map( (project) => (
    <ProjectPanel
      key={`project-panel-${project.index}`}
      project={project}
      toggleModal={toggleModal}
    />
  ));

  return panels;

};


export const loadResume = resumeData => dispatch => {

  dispatch(resumeDidLoad(resumeData));

  // for use in a Promise chain i.e. fetchData
  return resumeData;

};


export const fetchData = path => dispatch =>
  fetch(path)
    .then( response => response.json() )
    .then( json => dispatch(loadResume(json)) )
    .then( ({ resume: { projects } }) => dispatch(carouselPanelsCreator(projects)) )
    .then( panels => dispatch(preloadCarouselPanels(panels)) )
    .then( fontLoader(() => dispatch(fontsDidLoad())) )
    .catch( err =>
      console.log(`There was an error fetching the data. ERROR: ${err}`)
    );
