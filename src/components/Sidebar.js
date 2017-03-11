import React from 'react';

const styles = {
  sidebarContainer: {
    float: 'right',
    width: '23%',
    height: '100%',
    padding: '2vmin',
    minWidth: 'calc(340px)',
    background: 'rgb(45, 45, 45)'
  }
};

const Sidebar = ({ children }) => {
  return (
    <div style={styles.sidebarContainer}>
      {children && <div>{ children }</div>}
    </div>
  );
};

export default Sidebar;
