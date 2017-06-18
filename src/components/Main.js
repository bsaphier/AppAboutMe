import React, { Component } from 'react';

import Footer from './Footer';
import SectionFoot from './SectionFoot';
import WelcomeTitle from './WelcomeTitle';
import ResumeComponents from './resumeComponents';
import { Section, FillSection } from './displayComponents';


// ref.offsetTop
// window.scrollY
// sectionChange currSection
let mounted;


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      media: 'LRG',
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

    mounted = true;

    this.getSectionOffsets();

    this.props.toggleWelcome();

    window.addEventListener( 'scroll', this.scroll );
    // window.matchMedia('(max-width: 799px)').addListener(({ matches }) => {
    //   if (matches) {
    //     this.setState({ media: 'SML'});
    //   }
    // });
    // window.matchMedia('(min-width: 800px)').addListener(({ matches }) => {
    //   if (matches) {
    //     this.setState({ media: 'MED'});
    //   }
    // });
    // window.matchMedia('(min-width: 1300px)').addListener(({ matches }) => {
    //   if (matches) {
    //     this.setState({ media: 'LRG'});
    //   }
    // });

  }

  componentWillUnmount() {

    mounted = false;

    window.removeEventListener( 'scroll', this.scroll );
    // window.matchMedia('(max-width: 799px)').removeListener(({ matches }) => {
    //   if (matches) {
    //     this.setState({ media: 'SML'});
    //   }
    // });
    // window.matchMedia('(max-width: 1299px) and (min-width: 800px)').removeListener(({ matches }) => {
    //   if (matches) {
    //     this.setState({ media: 'MED'});
    //   }
    // });
    // window.matchMedia('(min-width: 1300px)').removeListener(({ matches }) => {
    //   if (matches) {
    //     this.setState({ media: 'LRG'});
    //   }
    // });

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
        }
      });

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

    console.log(this.state.media);

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
