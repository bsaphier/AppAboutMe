import { actionCreators as audioActionCreators } from 'react-redux-webaudio';
import fontLoader from './bin/fontLoader';
import { RESIZED, OPEN_BURGER, CLOSE_BURGER, FONTS_LOADED, CAROUSEL_INIT, RESUME_LOADED, SECTION_CHANGE, TOGGLE_WELCOME, CAROUSEL_ROTATE, CAROUSEL_RESIZE, TOGGLE_PROJECT_MODAL, CAROUSEL_ROTATE_AXIS } from './constants';
import { soundEvent } from './audio-funcs';


  // ––––––––––––––––––––––––––––––––––––––––– \\
 // -~-~-~-~-~-~- ACTION-CREATORS -~-~-~-~-~-~- \\
// _____________________________________________ \\

export const sectionChange = (section) => ({
    type: SECTION_CHANGE,
    section
});

export const windowResize = (nextSize) => ({
    type: RESIZED,
    nextSize
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
    radius: Math.round( ( panelSize / 2 ) / Math.tan( Math.PI / panelsCount ) ),
    theta: 360 / panelsCount,
    currPanel: 0,
    panelSize
});

export const resizeCarousel = (panelsCount, panelSize) => ({
    type: CAROUSEL_RESIZE,
    radius: Math.round( ( panelSize / 2 ) / Math.tan( Math.PI / panelsCount ) ),
    panelsCount,
    panelSize
});

export const rotateCarousel = (rotation, currPanel) => ({
    type: CAROUSEL_ROTATE,
    currPanel,
    rotation
});

export const rotateAxisCarousel = ( axis = 'Y' ) => ({
    type: CAROUSEL_ROTATE_AXIS,
    axis
});


  // ––––––––––––––––––––––––––––––––––––––––––––––––– \\
 // ~-~-~-~-~-~-~-~-~- ACTION-THUNKS -~-~-~-~-~-~-~-~-~ \\
// _____________________________________________________ \\

export const playSound = note => dispatch => {
    let sineDing = soundEvent( note );
    dispatch( audioActionCreators.emit( sineDing ) );
};

export const loadResume = resumeData => dispatch => {
    dispatch(resumeDidLoad(resumeData));
    return resumeData;  // for use in a Promise chain i.e. fetchData
};

export const fetchData = path => dispatch => {
    return fetch(path)
        .then(response => response.json())
        .then(json => dispatch(loadResume(json)))
        .then( fontLoader(() => dispatch( fontsDidLoad() )))
        .catch( err => {
            console.log(`There was an error fetching the data. ERROR: ${err}`);
        });
};
