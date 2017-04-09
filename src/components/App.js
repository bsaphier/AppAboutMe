import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './Main';
import store from '../store';
import { loadAppWithSpinner } from './HOC';
import { fetchData } from '../actions';


const loadAppHOC = loadAppWithSpinner( () => store.dispatch(fetchData()) )(Main);


const ResumeApp = connect(({ app: { isLoading }, resume: { resume, contact }}) => ({
    resume,
    contact,
    isLoading,
  })
)(loadAppHOC);


const App = () => <Route component={ResumeApp} />;


export default App;
