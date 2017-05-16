import React from 'react';

import AboutPanel from './AboutPanel';
//:TODO do I really want to load the images from here??
import imgs from '../../../bin/images';
import AboutSidebar from './AboutSidebar';
import SectionFoot from '../../SectionFoot';
import { Section, FillSection } from '../../displayComponents';


const styles = {
  aboutBackground: {
    position: 'absolute',
    zIndex: 1,
    top: -20,
    left: -20,
    width: '110%',
    height: '110%',
    backgroundSize: 'cover',
    backgroundImage: `url(${imgs.spaceBg})`,

    WebkitFilter: 'blur(4px)',
    filter: 'blur(4px)',
  }
};


const About = ({ content: { about, contact, siteInfo }, style }) => {
  return (
    <Section id="about">
      <div style={styles.aboutBackground} />

      <AboutSidebar style={style} content={{...contact, about}} />

      <FillSection>

        <AboutPanel style={style} content={siteInfo} />

        <SectionFoot to="projects" text="NEXT" />

      </FillSection>

    </Section>
  );
};


export default About;
