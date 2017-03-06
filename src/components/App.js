import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Main from './Main';
import Spinner from './Spinner';
import { fetchData } from '../actions';


const LoadMainApp = ({ app, resume, getResumeData }) => {

  // fake delay to test loading animation
  if (app.isLoading) {
    (() => setTimeout(getResumeData, 1000))();
  }

  return app.isLoading
    ? <Spinner />
    : <Main resume={resume} />;
};

const mapStateToProps = ({ app, resume: { resume } }) => ({ app, resume });

const mapDispatchToProps = dispatch => ({
  getResumeData: () => dispatch(fetchData())
});

const ResumeApp = connect(mapStateToProps, mapDispatchToProps)(LoadMainApp);


const App = () => (
  <main style={{ fontFamily: '"Roboto", sans-serif' }}>
    <Route component={ResumeApp} />
  </main>
);

export default App
