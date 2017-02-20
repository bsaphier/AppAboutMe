import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Banner from './Banner';
import Loading from './Loading';
import Navbar from './navbarComponents';
import ChangeSection from './ChangeSection';
import ResumeComponents from './resumeComponents';

const navbar = {
  home: 'Home',
  about: 'About',
  work: 'Work',
  education: 'Education',
  skills: 'Skills',
  portfolio: 'Portfolio'
};

const welcome = {
  name: 'Benjamin Saphier',
  text: 'My site is currently under construction. Come back soon!'
};


const Resume = ({ app, resume }) => {
  return app.isLoading
    ? <Loading />
    : (<div>
        <Header id="resume-home">
          <Navbar navLinks={ navbar } />
          <Banner title={ welcome } />
          <ChangeSection link="about" />
        </Header>

        <ResumeComponents
          work={ resume.work }
          basics={ resume.basics }
          skills={ resume.skills }
          education={ resume.education }
          portfolio={ resume.portfolio }
        />
      </div>
    );
};

const mapStateToProps = ({ app, resume }) => ({
  app,
  resume
});

export default connect(mapStateToProps)(Resume);
