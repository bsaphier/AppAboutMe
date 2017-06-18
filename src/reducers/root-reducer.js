import { combineReducers } from 'redux';

import app from './appState-reducer';
import burger from './burger-reducer';
import resume from './resume-reducer';
import carousel from './carousel-reducer';

export default combineReducers({ app, resume, burger, carousel });
