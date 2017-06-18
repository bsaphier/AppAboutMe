import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './components/Main';
import { loadAppWithSpinner } from './components/HOC';
import { fetchData, openBurger, closeBurger, sectionChange, toggleWelcome } from './actions';

// import app-wide styles
import './stylesheets/main.scss';

/**
  * Production build is intended for gh pages
  */
let resumePath = '';
if (process.env.NODE_ENV === 'production') { resumePath = '/app-about-me/public/resume.json'; }
if (process.env.NODE_ENV !== 'production') { resumePath = '/public/resume.json'; }


const RESUME_PATH = resumePath;


const mapStateToProps = ({ app, resume, burger, carousel }) => ({
  burger: burger,
  resume: resume.resume,
  panels: carousel.panels,
  contact: resume.contact,
  siteInfo: resume.siteInfo,
  isLoading: app.isLoading,
  currSection: app.currSection
});


const mapDispatchToProps = dispatch => ({
  closeBurger:   (section) => dispatch(closeBurger(section)),
  openBurger:    (section) => dispatch(openBurger(section)),
  sectionChange: (section) => dispatch(sectionChange(section)),
  toggleWelcome:        () => dispatch(toggleWelcome()),
  fetchData:            () => dispatch(fetchData(RESUME_PATH))
});


export default () => (
  <BrowserRouter basename="/">
    <Route component={
      connect(mapStateToProps, mapDispatchToProps)(
        loadAppWithSpinner(Main)
      )} />
  </BrowserRouter>
);
