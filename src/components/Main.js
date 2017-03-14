import React from 'react';

import store from '../store';
// import Navbar from './Navbar';
import Footer from './Footer';
import Welcome from './Welcome';
import SectionFoot from './SectionFoot';
import { toggleWelcome } from '../actions';
import ResumeComponents from './resumeComponents';
import { Section, FillView } from './displayComponents';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact,
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
    let { about, skills, contact, projects } = this.state;

    return (
      <main style={{ fontFamily: '"Roboto", sans-serif' }}>

        <Section id="home">
          {/* <Navbar navLinks={this.state.navItems} /> */}
          <FillView>
            <Welcome />
            <SectionFoot to="about" text="ABOUT ME" />
          </FillView>
        </Section>

        <ResumeComponents
          about={about}
          skills={skills}
          contact={contact}
          projects={projects}
        />
        <Footer />

      </main>
    );
  }
}

export default Main;
