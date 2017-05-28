import React from 'react';

import About from './about';
import Skills from './skills';
import Projects from './projects';


const styles = {
  title: {
    cursor: 'default',
    margin: '0 auto 0 0',
    // fontWeight: '400',
    fontSize: '3rem',
    lineHeight: '0.9em',
    letterSpacing: '0.05em'
  },
  text: {
    cursor: 'default',
    margin: '30px 0',
    fontWeight: 900,
    fontSize: '1.1rem',
    lineHeight: '1.62em',
    letterSpacing: '-0.02rem',
  }
};

const ResumeComponents = ({ about, skills, contact, siteInfo, projects, ...props }) => {
  return (
    <div>
      <About style={styles} content={{ about, contact, siteInfo }} {...props} />
      <Projects style={styles} content={ projects } {...props} />
      <Skills style={styles} content={ skills } {...props} />
    </div>
  );
};

export default ResumeComponents;
