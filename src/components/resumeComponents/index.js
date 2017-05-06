import React from 'react';

import About from './about';
import Skills from './skills';
import Projects from './projects';


const styles = {
  title: {
    cursor: 'default',
    fontWeight: 100,
    fontSize: '3rem',
    letterSpacing: '0.09em',
    margin: '0 auto 0 0'
  },
  text: {
    cursor: 'default',
    fontWeight: 900,
    fontSize: '1.1rem',
    letterSpacing: '-0.02rem',
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
