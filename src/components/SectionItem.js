import React from 'react';

const styles = {
  sectionItem: {
    overflow: 'hidden',
    padding: '2em 2em',
    border: '0.162em solid',
    position: 'absolute',
    background: 'rgba(255, 255, 255, 1)',
    borderImage: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)',
    borderImageSlice: 1
  }
};

const SectionItem = ({ children, style }) => (
  <div style={{...styles.sectionItem, ...style}}>
    { children }
  </div>
);

export default SectionItem;
