import React from 'react';
import { Paper } from 'material-ui';

const style = {
  margin: 20,
  padding: 20,
  marginTop: 68,
  textAlign: 'center',
  display: 'inline-block',
};

const SectionItem = ({ children }) => (
  <Paper style={style} zDepth={1} rounded={false}>
    { children }
  </Paper>
);

export default SectionItem;
