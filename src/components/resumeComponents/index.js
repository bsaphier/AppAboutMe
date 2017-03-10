import React from 'react';

import About from './about';
import Skills from './skills';
import Projects from './projects';


const styles = {
  banner: {
    // position: 'absolute',
    background: 'none',
    textAlign: 'center',
    color: 'rgba(255, 68, 62, 1)',
    // padding: '40pt',
    // width: 'auto',
    margin: '0 auto',
    height: '100%',
    paddingTop: 0,
  },
  title: {
    fontWeight: 900,
    fontSize: '3vh',
    lineHeight: '16.2vh',
    letterSpacing: '0.1em',
    marginLeft: '8vh',
    WebkitTransition: 'all .3s ease-in-out',
    MozTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out'
  }
};

const ResumeComponents = ({ about, skills, projects }) => {
  return (
    <div>
      <About styling={styles} content={ about } />
      <Projects styling={styles} content={ projects } />
      <Skills styling={styles} content={ skills } />
    </div>
  );
};

export default ResumeComponents;
