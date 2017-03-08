import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/root-reducer';

const reduxLogger = process.env.PORT ? null : createLogger({collapsed: true});

export default createStore(
  rootReducer,
  applyMiddleware(
    reduxLogger,
    thunkMiddleware
  )
);
