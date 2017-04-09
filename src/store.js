import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/root-reducer';

// check node ENV if this should be applied . . .
const reduxLogger = createLogger({collapsed: true});

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    reduxLogger
  )
);
