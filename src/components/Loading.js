import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchData } from '../actions';

import Spinner from './Spinner';


const Main = ({ app, getResumeData }) => {

  // fake delay to test loading animation
  const fakeDelay = () => setTimeout(getResumeData, 1000);

  if (app.isLoading) fakeDelay();

  return app.isLoading
    ? <Spinner />
    : <Redirect to="/resume" />;
};


const mapStateToProps = ({ app }) => ({ app });

const mapDispatchToProps = dispatch => ({
  getResumeData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
