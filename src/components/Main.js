import React, { Component } from 'react';

import Footer from './Footer';
import SectionFoot from './SectionFoot';
import WelcomeTitle from './WelcomeTitle';
import ResumeComponents from './resumeComponents';
import { Section, FillSection } from './displayComponents';


let mounted = false;

/*
 * equivalent to CSS media queries
 */
const SML = window ? window.matchMedia('only screen and (max-width: 799px)') : null;
const MED = window ? window.matchMedia('only screen and (max-width: 1299px) and (min-width: 800px)') : null;
const LRG = window ? window.matchMedia('only screen and (min-width: 1300px)') : null;


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sectionOffsetTop: {
        home: 0,
        about: 0,
        projects: 0,
        skills: 0
      }
    };

    this.scroll = this.scroll.bind(this);
    this.burgerToggle = this.burgerToggle.bind(this);
    this.getSectionOffsets = this.getSectionOffsets.bind(this);

  }


  componentDidMount() {

    this.props.toggleWelcome();

    if (!mounted) {

      window.addEventListener( 'scroll', this.scroll );

      SML.addListener(({ matches }) => {
        if (matches) { this.props.resizeSML(); }
      });

      MED.addListener(({ matches }) => {
        if (matches) { this.props.resizeMED(); }
      });

      LRG.addListener(({ matches }) => {
        if (matches) { this.props.resizeLRG(); }
      });

      mounted = true;

      this.getSectionOffsets();

    }

  }


  componentWillUnmount() {

    if (mounted) {

      window.removeEventListener( 'scroll', this.scroll );

      SML.removeListener(({ matches }) => {
        if (matches) { this.props.resizeSML(); }
      });

      MED.removeListener(({ matches }) => {
        if (matches) { this.props.resizeMED(); }
      });

      LRG.removeListener(({ matches }) => {
        if (matches) { this.props.resizeLRG(); }
      });

      mounted = false;

    }

  }


  getSectionOffsets() {

    if (mounted) {
      let aboutY = document.getElementById('about').offsetTop;
      let projectsY = document.getElementById('projects').offsetTop;
      let skillsY = document.getElementById('skills').offsetTop;

      this.setState({
        sectionOffsetTop: {
          about: aboutY,
          projects: projectsY,
          skills: skillsY
        }});
    }
  }


  scroll({ currentTarget }) {

    let nextSection;

    let { scrollY } = currentTarget;
    let { currSection, sectionChange } = this.props;
    let { sectionOffsetTop: { about, projects } } = this.state;

    let half,
        breakA = half = about / 2,
        breakB = about + half,
        breakC = projects + half;

    if (scrollY <= breakA) {
      nextSection = 'home';
    } else if (scrollY > breakA && scrollY <= breakB) {
      nextSection = 'about';
    } else if (scrollY > breakB && scrollY <= breakC) {
      nextSection = 'projects';
    } else if (scrollY > breakC) {
      nextSection = 'skills';
    }

    if (currSection !== nextSection) {
      sectionChange( nextSection );
    }

  }


  burgerToggle( open ) {

    let { currSection, openBurger, closeBurger } = this.props;

    return open
      ? closeBurger( currSection )
      :  openBurger( currSection );

  }


  render() {

    const { panels, siteInfo, contact, resume: { about, skills, projects }, ...props } = this.props;

    return (
      <main style={{ fontFamily: '"Roboto", sans-serif' }}>

        <Section id="home">
          <FillSection>
            <WelcomeTitle />
            <SectionFoot to="about" text="ABOUT ME" />
          </FillSection>
        </Section>

        <ResumeComponents
          mql={this.state.media}
          about={about}
          skills={skills}
          contact={contact}
          siteInfo={siteInfo}
          projects={{ projects, carouselPanels: panels}}
          burgerToggle={this.burgerToggle}
          {...props}
        />

        <Footer />

      </main>
    );
  }
}


export default Main;
