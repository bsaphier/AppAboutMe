import React from 'react';

const style = {
  margin: 20,
  overflow: 'hidden',
  maxWidth: '62%',
  maxHeight: '38vh',
  padding: '5px 20px',
  textAlign: 'center',
  display: 'inline-block',
  lineHeight: '1.62em',
  border: '5px solid',
  borderImage: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)',
  borderImageSlice: 1
};

const SectionItem = ({ children }) => (
  <div style={style}>
    { children }
  </div>
);

export default SectionItem;
