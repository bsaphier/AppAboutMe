import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Banner from './Banner';
import Navbar from './Navbar';
import Loading from './Loading';
import ChangeSection from './ChangeSection';
import ResumeComponents from './resumeComponents';

const navItems = {
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  projects: 'Projects'
};


const Resume = ({ app, resume: { name, resume } }) => {
  return app.isLoading
    ? <Loading />
    : (<div>
        <Header>
          <Navbar navLinks={navItems} />
          <Banner name={name} />
          <ChangeSection link="about" text="ABOUT ME" />
        </Header>

        <ResumeComponents
          about={resume.about}
          skills={resume.skills}
          projects={resume.projects}
        />
      </div>
    );
};

const mapStateToProps = ({ app, resume }) => ({
  app,
  resume
});

export default connect(mapStateToProps)(Resume);
