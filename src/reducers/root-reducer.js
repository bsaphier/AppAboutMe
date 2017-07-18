import { combineReducers } from 'redux';
import { webAudioReducer } from 'react-redux-webaudio';

import app from './app-state-reducer';
import burger from './burger-reducer';
import resume from './resume-reducer';
import carousel from './carousel-reducer';

export default combineReducers({ app, resume, burger, carousel, webAudioReducer });
