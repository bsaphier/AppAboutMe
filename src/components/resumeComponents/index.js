import React from 'react';

import Work from './work';
import About from './about';
import Skills from './skills';
import Footer from './footer';
import Education from './education';
import Portfolio from './portfolio';


const ResumeComponents = ({ work, basics, skills, education, portfolio }) => {
  return (
    <div>
      <About content={ basics } />
      <Work content={ work } />
      <Education content={ education } />
      <Skills content={ skills } />
      <Portfolio content={ portfolio } />
      <Footer content={ basics } />
    </div>
  );
};

export default ResumeComponents;
