import React from 'react';

import store from '../store';
import Navbar from './Navbar';
import Footer from './Footer';
import Section from './Section';
import Welcome from './Welcome';
import SectionFoot from './SectionFoot';
import { toggleWelcome } from '../actions';
import ResumeComponents from './resumeComponents';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: props.resume.about,
      skills: props.resume.skills,
      projects: props.resume.projects,
      navItems: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects'
      }
    };
  }

  componentDidMount() {
    store.dispatch(toggleWelcome());
  }

  render() {
    return (
      <main style={{ fontFamily: '"Roboto", sans-serif' }}>
        <Section id="home">
          {/* <Navbar navLinks={this.state.navItems} /> */}
          <Welcome />
          <SectionFoot to="about" text="ABOUT ME" />
        </Section>

        <ResumeComponents
          about={this.state.about}
          skills={this.state.skills}
          projects={this.state.projects}
          />
        <Footer />
      </main>
    );
  }
}

export default Main;
