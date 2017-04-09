import React from 'react';

import About from './about';
import Skills from './skills';
import Projects from './projects';


const styles = {
  title: {
    fontWeight: 100,
    fontSize: '3em',
    // letterSpacing: '0.1em',
    marginLeft: 0,
    WebkitTransition: 'all .3s ease-in-out',
    MozTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out'
  },
  text: {
    fontWeight: 500,
    fontSize: '1.2em',
    paddingTop: '2em',
    letterSpacing: '-0.02em',
  }
};

const ResumeComponents = ({ about, skills, contact, projects, ...props }) => {
  return (
    <div>
      <About style={styles} content={{ about, contact }} {...props} />
      <Projects style={styles} content={ projects } {...props} />
      <Skills style={styles} content={ skills } {...props} />
    </div>
  );
};

export default ResumeComponents;
