import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import store from './store';
import Router from './Router';

injectTapEventPlugin();

render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <Router />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
