import React from 'react';

import Title from './Title';

const styles = {
  sidebarContainer: {
    float: 'right',
    width: '23%',
    height: '100%',
    minWidth: 'calc(340px)',
    background: 'rgb(45, 45, 45)'
  },
  title: {
    fontWeight: 400,
    fontSize: '5vh',
    textAlign: 'left',
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
