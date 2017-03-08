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


const ResumeApp = connect(
  ({ app, resume: { resume } }) => ({ app, resume }),
  (dispatch) => ({getResumeData: () => dispatch(fetchData())})
)(LoadMainApp);


const App = () => (
  <main style={{ fontFamily: '"Roboto", sans-serif' }}>
    <Route component={ResumeApp} />
  </main>
);


export default App;
