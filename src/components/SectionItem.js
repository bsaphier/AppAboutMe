import React from 'react';

const style = {
  margin: 20,
  // float: 'left',
  overflow: 'hidden',
  // maxWidth: '20vmin',
  maxHeight: '38vh',
  padding: '5px 20px',
  textAlign: 'center',
  display: 'inline-block',
  // fontSize: 14,
  lineHeight: '1.62em',
  border: '5px solid rgb(255, 43, 37)'
};

const SectionItem = ({ children }) => (
  <div style={style}>
    { children }
  </div>
);

export default SectionItem;
