import React from 'react';

const styles = {
  rightSideContainer: {
    float: 'right',
    width: '23%',
    height: '100%',
    padding: '10pt 20pt',
    minWidth: 'calc(340px)',
    background: 'rgb(255, 255, 255)',
    boxShadow: 'inset 0em -1.3em 1.3em -1em rgba(81, 81, 81, 0.1)'
  }
};

const SideSection = ({ style, children }) => {
  return (
    <div style={{...styles.rightSideContainer, ...style}}>
      { children }
    </div>
  );
};

export default SideSection;
