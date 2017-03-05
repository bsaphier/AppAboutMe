import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import App from './components/App';

// this tells webpack to include all the Sass styling
//* TODO - convert styling to JS
import './stylesheets/main.scss';


const Router = () => (
  <BrowserRouter basename="/my-site">
    <App />
  </BrowserRouter>
);

export default Router;
