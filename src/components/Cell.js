import React from 'react';

const styles = {
  cell: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    verticalAlign: 'middle',
  }
};

const Cell = ({ children, style }) => (
  <div style={{...styles.cell, ...style}}>
    { children }
  </div>
);

export default Cell;
