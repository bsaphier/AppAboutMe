import React from 'react';
import { connect } from 'react-redux';

import Main from './Main';
import Spinner from './Spinner';
import { fetchData } from '../actions';

const LoadApp = ({ app, resume, getResumeData }) => {

  // fake delay to test loading animation
  const fakeDelay = () => setTimeout(getResumeData, 1000);

  if (app.isLoading) fakeDelay();

  return app.isLoading
    ? <Spinner />
    : <Main resume={resume} />;
};


const mapStateToProps = ({ app, resume: { resume } }) => ({ app, resume });

const mapDispatchToProps = dispatch => ({
  getResumeData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadApp);
