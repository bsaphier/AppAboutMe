import React, { Component } from 'react';

import Footer from './Footer';
import Welcome from './Welcome';
import ResumeComponents from './resumeComponents';
import { Section, SectionFoot, FillSection } from './displayComponents';
import { toggleWelcome } from '../actions';


class Main extends Component {
  componentDidMount() {
    this.props.dispatch(toggleWelcome());
  }

  render() {
    const { contact, resume: { about, skills, projects } } = this.props;

    return (
      <main style={{ fontFamily: '"Roboto", sans-serif' }}>

        <Section id="home">
          <FillSection>
            <Welcome />
            <SectionFoot to="about" text="ABOUT ME" />
          </FillSection>
        </Section>

        <ResumeComponents
          about={about}
          skills={skills}
          contact={contact}
          projects={projects} {...this.props}
        />
        <Footer />

      </main>
    );
  }
}

export default Main;
