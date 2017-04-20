import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './Main';
import store from '../store';
import { loadAppWithSpinner } from './HOC';
import { fetchData } from '../actions';

//* TODO - convert styling to JS
// this tells webpack to include all the Sass styling
import '../stylesheets/main.scss';


const loadAppHOC = loadAppWithSpinner( () => store.dispatch(fetchData()) )(Main);


const ResumeApp = connect(({ app: { isLoading }, resume: { resume, contact }}) => ({
    resume,
    contact,
    isLoading,
  })
)(loadAppHOC);


const App = () => (
  <BrowserRouter basename="/my-site">
    <Route component={ResumeApp} />
  </BrowserRouter>
);


export default App;
