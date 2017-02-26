import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

import Loading from './Loading';
import Resume from './Resume';


const Main = ({ app, getResumeData }) => {

  // fake delay to test loading animation
  const fakeDelay = () => setTimeout(getResumeData, 1000);

  if (app.isLoading) fakeDelay();

  return (
    <div id="outer-container">
      <main id="page-wrap">
        { app.isLoading ? <Loading /> : <Resume /> }
      </main>
    </div>
  );
};


const mapStateToProps = ({ app }) => ({ app });

const mapDispatchToProps = dispatch => ({
  getResumeData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
