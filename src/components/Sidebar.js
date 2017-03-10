import React from 'react';

import Title from './Title';

const styles = {
  sidebarContainer: {
    // position: 'relative',
    float: 'right',
    width: '25%',
    height: '100%',
    minWidth: '300px',
    backgroundColor: 'rgb(45, 45, 45)'
  },
  title: {
    fontWeight: 400,
    fontSize: '5vh',
    textAlign: 'left',
    // lineHeight: 'vh',
    marginLeft: 0,
    padding: '0.8em',
    letterSpacing: '-0.1em'
  }
};

const Sidebar = ({ children, title }) => {
  return (
    <div style={styles.sidebarContainer}>
      <Title style={styles.title}>{ title }</Title>
      {children && <div>
        { children }
      </div>}
    </div>
  );
};

export default Sidebar;
