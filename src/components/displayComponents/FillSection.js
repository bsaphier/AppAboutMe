import React from 'react';

const styles = {
  fillSection: {
    height: '100%',
    padding: '20px',
    overflow: 'hidden',
    background: 'none',
    position: 'relative',
    zIndex: 8
  }
};

const FillSection = ({ children, style, ...props }) => (
  <div style={{...styles.fillSection, ...style}} {...props}>
    { children }
  </div>
);

export default FillSection;
