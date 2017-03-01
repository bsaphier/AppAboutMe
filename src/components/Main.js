import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Welcome from './Welcome';
import ChangeSection from './ChangeSection';
import ResumeComponents from './resumeComponents';


const Main = ({ resume }) => {

  const navItems = {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects'
  };

  return (
    <div>
      <Header>
        <Navbar navLinks={navItems} />
        <Welcome />
        <ChangeSection to="about" text="ABOUT ME" />
      </Header>

      <ResumeComponents
        about={resume.about}
        skills={resume.skills}
        projects={resume.projects}
      />
      <Footer />
    </div>
  );
};

export default Main;
