import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Section from './Section';
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
      <Navbar navLinks={navItems} />
      <Section>
        <Welcome />
        <ChangeSection to="about" text="ABOUT ME" />
      </Section>

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
