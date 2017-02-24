import React from 'react';

const style = {
  margin: 20,
  padding: 'auto',
  textAlign: 'center',
  display: 'inline-block',
};

const SectionItem = ({ children }) => (
  <div style={style}>
    { children }
  </div>
);

export default SectionItem;
