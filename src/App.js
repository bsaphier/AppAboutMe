import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './components/Main';
import { loadAppWithSpinner } from './components/HOC';
import { fetchData, toggleWelcome } from './actions';

// import app-wide styles
import './stylesheets/main.scss';

/**
* Production build is intended for a specific github repo
*/
let resumePath = '';
if (process.env.NODE_ENV === 'production') { resumePath = '/app-about-me/public/resume.json'; }
if (process.env.NODE_ENV !== 'production') { resumePath = '/public/resume.json'; }

const RESUME_PATH = resumePath;


const loadAppHOC = loadAppWithSpinner(Main);


const ResumeApp = connect(
  ({ app: { isLoading }, resume: { resume, contact, siteInfo }, carousel: { panels } }) => ({
    resume,
    panels,
    contact,
    siteInfo,
    isLoading,
  }),
  dispatch => ({
    toggleWelcome: () => dispatch(toggleWelcome()),
    fetchData: () => dispatch(fetchData(RESUME_PATH))
  })
)(loadAppHOC);


const App = () => (
  <BrowserRouter basename="/my-site">
    <Route component={ResumeApp} />
  </BrowserRouter>
);


export default App;
