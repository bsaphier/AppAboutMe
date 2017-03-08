import React from 'react';

import store from '../store';
import Navbar from './Navbar';
import Footer from './Footer';
import Section from './Section';
import Welcome from './Welcome';
import { toggleWelcome } from '../actions';
import ChangeSection from './ChangeSection';
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
      <div>
        <Section>
          <Navbar navLinks={this.state.navItems} />
          <Welcome />
          <ChangeSection to="about" text="ABOUT ME" />
        </Section>

        <ResumeComponents
          about={this.state.about}
          skills={this.state.skills}
          projects={this.state.projects}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
