import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Welcome from './Welcome';
import ChangeSection from './ChangeSection';
import ResumeComponents from './resumeComponents';

const navItems = {
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  projects: 'Projects'
};


const Resume = ({ resume: { resume } }) => {
  return (
    <div>
      <Header>
        <Navbar navLinks={navItems} />
        <Welcome />
        <ChangeSection link="about" text="ABOUT ME" />
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

const mapStateToProps = ({ resume }) => ({ resume });

export default connect(mapStateToProps)(Resume);
