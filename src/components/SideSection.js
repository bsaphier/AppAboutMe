import React from 'react';

const styles = {
  rightSideContainer: {
    float: 'right',
    width: '23%',
    height: '100%',
    padding: '2vmin',
    minWidth: 'calc(340px)',
    background: 'rgb(45, 45, 45)'
  }
};

const SideSection = ({ children }) => {
  return (
    <div style={styles.rightSideContainer}>
      { children }
    </div>
  );
};

export default SideSection;
