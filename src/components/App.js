import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Main from './Main';
import store from '../store';
import { fetchData } from '../actions';
import { loadAppWithSpinner } from './HOC';


const loadAppHOC = loadAppWithSpinner( () => store.dispatch(fetchData()) )(Main);

const ResumeApp = connect(
  ({ app: { isLoading }, resume: { resume } }) => ({ resume, isLoading })
)(loadAppHOC);


const App = () => (<Route component={ResumeApp} />);

export default App;
