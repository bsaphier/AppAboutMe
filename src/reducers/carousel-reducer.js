import {
  CAROUSEL_INIT,
  CAROUSEL_ROTATE,
  CAROUSEL_RESIZE
} from '../constants';


const initialState = {
  // these get set when the component mounts and only stateful for future use
  theta: 0,
  axis: 'Y',

  // these update on window resize
  radius: 0,
  panelSize: 0,

  // user updates these
  rotation: 0,
  currPanel: 0
};


export default (state = initialState, { type, direction, panelSize, panelsCount }) => {

  let radius;
  const nextState = {...state};

  if (panelSize && panelsCount) {
    radius = Math.round((panelSize / 2) / Math.tan(Math.PI / panelsCount));
  }


  switch (type) {

    case CAROUSEL_INIT:
      nextState.theta = 360 / panelsCount;
      nextState.panelSize = panelSize;
      nextState.radius = radius;
      return nextState;

    case CAROUSEL_ROTATE:
      nextState.rotation += nextState.theta * direction;
      nextState.currPanel += direction;
      return nextState;

    case CAROUSEL_RESIZE:
      nextState.panelSize = panelSize;
      nextState.radius = radius;
      return nextState;

    default:
      return nextState;
  }

};
