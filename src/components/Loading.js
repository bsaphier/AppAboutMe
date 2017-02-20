import React from 'react';
import { CircularProgress } from 'material-ui';

import Header from './Header';


const Loading = () => (
  <Header>
    <CircularProgress size={80} thickness={5} />
  </Header>
);

export default Loading;
