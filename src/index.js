import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './App';
import store from './store';

injectTapEventPlugin();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
