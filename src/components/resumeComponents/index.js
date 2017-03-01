import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './about';
import Skills from './skills';
import Projects from './projects';


const styles = {
  section: {
    width: '100vw',
    height: '90vh',
    paddingTop: '10vh',
    display: 'inline-block',
  },
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
