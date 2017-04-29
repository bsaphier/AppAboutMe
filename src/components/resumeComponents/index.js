import React from 'react';

import About from './about';
import Skills from './skills';
import Projects from './projects';


const styles = {
  title: {
    fontWeight: 100,
    fontSize: '4rem',
    // letterSpacing: '0.1rem',
    marginLeft: 0
  },
  text: {
    fontWeight: 900,
    fontSize: '1.6rem',
    paddingTop: '2rem',
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
