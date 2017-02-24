import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Banner from './Banner';
import Navbar from './Navbar';
import Loading from './Loading';
import ChangeSection from './ChangeSection';
import ResumeComponents from './resumeComponents';

const navbar = {
  home: 'Home',
  about: 'About',
  work: 'Experience',
  education: 'Education',
  skills: 'Skills',
  portfolio: 'Portfolio'
};


const Resume = ({ app, resume: { name, resume } }) => {
  return app.isLoading
    ? <Loading />
    : (<div>
        <Header id="resume-home">
          <Navbar navLinks={navbar} />
          <Banner name={name} />
          <ChangeSection link="about" text="ABOUT ME" />
        </Header>

        <ResumeComponents
          basics={resume.about}
          skills={resume.skills}
          work={resume.experience}
          portfolio={resume.projects}
          education={resume.education}
        />
      </div>
    );
};

const mapStateToProps = ({ app, resume }) => ({
  app,
  resume
});

export default connect(mapStateToProps)(Resume);
