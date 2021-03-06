import { CAROUSEL_INIT, CAROUSEL_ROTATE, CAROUSEL_RESIZE, CAROUSEL_ROTATE_AXIS } from '../constants';


const initialState = {
  // these get set when the component mounts and only stored in state for future use
  theta: 0,
  axis: 'Y',

  // these update on window resize
  radius: 0,
  panelSize: 0,

  // user updates these
  rotation: 0,
  currPanel: 0,

  // store the Panel components in the reducer to preload the images when the App loads
  // panels: []
};


export default (state = initialState, { type, ...action }) => {

  const nextState = {...state};

  switch (type) {

    case CAROUSEL_INIT:
      nextState.currPanel = action.currPanel;
      nextState.panelSize = action.panelSize;
      nextState.radius = action.radius;
      nextState.theta = action.theta;
      return nextState;

    case CAROUSEL_ROTATE:
      nextState.currPanel = action.currPanel;
      nextState.rotation = action.rotation;
      return nextState;

    case CAROUSEL_ROTATE_AXIS:
      nextState.axis = action.axis;
      return nextState;

    case CAROUSEL_RESIZE:
      nextState.panelSize = action.panelSize;
      nextState.radius = action.radius;
      return nextState;

    // case CAROUSEL_LOAD_PANELS:
    //   nextState.panels = action.panels;
    //   return nextState;

    default:
      return nextState;
  }

};
