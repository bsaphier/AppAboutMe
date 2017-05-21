import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/root-reducer';


//:TODO conditional import??
import createLogger from 'redux-logger';


let middleware = [];

if (process.env.NODE_ENV === 'production') {

  middleware = [ thunkMiddleware ];

}


if (process.env.NODE_ENV !== 'production') {

  const reduxLogger = createLogger({collapsed: true});

  middleware = [ thunkMiddleware, reduxLogger ];

}


const _applyMiddleware = midware => applyMiddleware(...midware);


export default createStore( rootReducer, _applyMiddleware(middleware) );
