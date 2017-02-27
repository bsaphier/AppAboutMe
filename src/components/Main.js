import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

import Resume from './Resume';
import Loading from './Loading';


const Main = ({ app, getResumeData }) => {

  // fake delay to test loading animation
  const fakeDelay = () => setTimeout(getResumeData, 1000);

  if (app.isLoading) fakeDelay();

  return (
    <main>
      { app.isLoading ? <Loading /> : <Resume /> }
    </main>
  );
};


const mapStateToProps = ({ app }) => ({ app });

const mapDispatchToProps = dispatch => ({
  getResumeData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
