import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import store from './store';
import Main from './components/Main';
import { loadAppWithSpinner } from './components/HOC';
import { fetchData } from './actions';

//* TODO - convert styling to JS
// this tells webpack to include all the Sass styling
import './stylesheets/main.scss';


const loadAppHOC = loadAppWithSpinner( () => store.dispatch(fetchData()) )(Main);


const ResumeApp = connect(({ app: { isLoading }, resume: { resume, contact }, carousel: { panels } }) => ({
    resume,
    panels,
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
