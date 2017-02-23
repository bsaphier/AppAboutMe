import {
  Route,
  Router,
  IndexRoute,
  IndexRedirect,
  browserHistory
} from 'react-router';
import React from 'react';

import store from './store';
import { fetchData } from './actions';

import Main from './components/Main';
import Resume from './components/Resume';
import SectionWrapper from './components/SectionWrapper';

// this tells webpack to include all the Sass styling
require('./stylesheets/main.scss');

const getResumeData = () => store.dispatch(fetchData());

// 5 seconds is probably too long!
const fakeDelay = () => setTimeout(getResumeData, 1000);


const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to="/my-site" />
      <Route path="my-site" component={SectionWrapper} onEnter={fakeDelay}>
        <IndexRoute component={Resume} />
      </Route>
    </Route>
  </Router>
);

export default Routes;
