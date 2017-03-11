import React from 'react';

const styles = {
  cell: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  }
};

const Cell = ({ children, style }) => (
  <div className="cell" style={{...styles.cell, ...style}}>
    { children }
  </div>
);

export default Cell;
