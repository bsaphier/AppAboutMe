import React from 'react';

const styles = {
  fillView: {
    height: '100%',
    padding: '3vmin',
    overflow: 'hidden',
    background: 'none'
  }
};

const FillView = ({ children, style }) => (
  <div className="fillView" style={{...styles.fillView, ...style}}>
    { children }
  </div>
);

export default FillView;
