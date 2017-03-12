import React from 'react';

const styles = {
  fillView: {
    height: '100%',
    padding: '1em',
    overflow: 'hidden',
    background: 'none',
    position: 'relative'
  }
};

const FillView = ({ children, style }) => (
  <div className="fillView" style={{...styles.fillView, ...style}}>
    { children }
  </div>
);

export default FillView;
