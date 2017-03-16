import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import Router from './Router';

injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app')
);
