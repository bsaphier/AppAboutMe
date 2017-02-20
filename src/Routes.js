import {
  Route,
  Router,
  IndexRoute,
  IndexRedirect,
  browserHistory
} from 'react-router';
import React from 'react';

import Main from './components/Main';
import SectionWrapper from './components/SectionWrapper';
import ResumeContainer from './containers/ResumeContainer';

require('./stylesheets/main.scss');


const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to="/my-site/#" />
      <Route path="my-site" component={SectionWrapper}>
        <IndexRoute component={ResumeContainer} />
      </Route>
    </Route>
  </Router>
);

export default Routes;
