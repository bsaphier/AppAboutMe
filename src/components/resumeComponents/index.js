import React from 'react';

import About from './about';
import Skills from './skills';
import Projects from './projects';


const styles = {
  title: {
    margin: '0 20px 18px 20px',
    WebkitTransition: 'all .3s ease-in-out',
    MozTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out'
  }
};

const ResumeComponents = ({ about, skills, projects }) => {
  return (
    <div>
      <About styling={styles} content={ about } />
      <Skills styling={styles} content={ skills } />
      <Projects styling={styles} content={ projects } />
    </div>
  );
};

export default ResumeComponents;
