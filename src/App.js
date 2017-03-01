import {
  Route,
  BrowserRouter,
} from 'react-router-dom';
import React from 'react';

import Resume from './components/Resume';
import Loading from './components/Loading';

// this tells webpack to include all the Sass styling
import './stylesheets/main.scss';


const App = () => (
  <BrowserRouter basename="/my-site">
    <main>
      <Route path="/" component={Loading} />
      <Route path="/resume" component={Resume} />
    </main>
  </BrowserRouter>
);

export default App;
