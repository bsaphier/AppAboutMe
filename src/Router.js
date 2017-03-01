import {
  Route,
  BrowserRouter,
} from 'react-router-dom';
import React from 'react';

import LoadApp from './components/LoadApp';

// this tells webpack to include all the Sass styling
import './stylesheets/main.scss';


const Router = () => (
  <BrowserRouter basename="/my-site">
    <main>
      <Route component={LoadApp} />
    </main>
  </BrowserRouter>
);

export default Router;
