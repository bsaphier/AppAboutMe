import { combineReducers } from 'redux';

import appState from './appState-reducer';
import resumeReducer from './resume-reducer';
import carouselReducer from './carousel-reducer';

export default combineReducers({
  app: appState,
  resume: resumeReducer,
  carousel: carouselReducer
});
