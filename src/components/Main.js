import React, { Component } from 'react';

import Footer from './Footer';
import SectionFoot from './SectionFoot';
import WelcomeTitle from './WelcomeTitle';
import ResumeComponents from './resumeComponents';
import { Section, FillSection } from './displayComponents';


class Main extends Component {
  componentDidMount() {
    this.props.toggleWelcome();
  }

  render() {
    const { panels, siteInfo, contact, resume: { about, skills, projects } } = this.props;
    return (
      <main style={{ fontFamily: '"Roboto", sans-serif' }}>

        <Section id="home">
          <FillSection>
            <WelcomeTitle />
            <SectionFoot to="about" text="ABOUT ME" />
          </FillSection>
        </Section>

        <ResumeComponents
          about={about}
          skills={skills}
          contact={contact}
          siteInfo={siteInfo}
          projects={{ projects, carouselPanels: panels}}
          {...this.props}
        />

        <Footer />

      </main>
    );
  }
}

export default Main;
