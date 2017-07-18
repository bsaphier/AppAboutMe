import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/root-reducer';


//:TODO conditional import??
import createLogger from 'redux-logger';


let myStore;


if (process.env.NODE_ENV === 'production') {

  myStore = [
    rootReducer,
    applyMiddleware(thunkMiddleware)
  ];

}


if (process.env.NODE_ENV !== 'production') {

  const reduxLogger = createLogger({collapsed: true});

  myStore = [
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware, reduxLogger)
  ];

}


export default createStore( ...myStore );
