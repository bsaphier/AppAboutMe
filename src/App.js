import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './components/Main';
import { loadAppWithSpinner } from './components/HOC';
import { fetchData, toggleWelcome } from './actions';

// import app-wide styles
import './stylesheets/main.scss';

/**
  * Production build is intended for gh pages
  */
let resumePath = '';
if (process.env.NODE_ENV === 'production') { resumePath = '/app-about-me/public/resume.json'; }
if (process.env.NODE_ENV !== 'production') { resumePath = '/public/resume.json'; }


const RESUME_PATH = resumePath;


const mapStateToProps = ({ app, resume, carousel }) => ({
  resume: resume.resume,
  panels: carousel.panels,
  contact: resume.contact,
  isLoading: app.isLoading,
  siteInfo: resume.siteInfo,
});


const mapDispatchToProps = dispatch => ({
  toggleWelcome: () => dispatch(toggleWelcome()),
  fetchData: () => dispatch(fetchData(RESUME_PATH))
});


export default () => (
  <BrowserRouter basename="/my-site">
    <Route component={
      connect(mapStateToProps, mapDispatchToProps)(
        loadAppWithSpinner(Main)
      )} />
  </BrowserRouter>
);
