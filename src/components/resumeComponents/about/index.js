import React from 'react';

import AboutPanel from './AboutPanel';
//:TODO do I really want to load the images from here??
import imgs from '../../../bin/images';
import AboutSidebar from './AboutSidebar';
import SectionFoot from '../../SectionFoot';
import { buttons, Section, FillSection } from '../../displayComponents';


const { Button } = buttons;

const SECTION_NAME = 'about';

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

const About = ({
  style,
  burger,
  content: { about, contact, siteInfo },
  ...props
}) => {

  const toggleBurger = () => {
    if (burger[SECTION_NAME]) { props.closeBurger(SECTION_NAME); }
    else                      { props.openBurger( SECTION_NAME); }
  };

  return (
    <Section id={SECTION_NAME}>
      <div style={styles.aboutBackground} />

      <AboutSidebar
        style={style}
        burgerOpen={burger.about}
        content={{...contact, about}} />

      <FillSection>

      <Button
        className="burgerButton"
        onClick={toggleBurger}
        style={{
          zIndex: 9999,
          position: 'absolute',
          top: '5%',
          right: '5%'
        }}>{'III'}</Button>

        <AboutPanel
          style={style}
          content={{siteInfo, ...contact}}
          burgerOpen={burger.about} />

        <SectionFoot to="projects" text="NEXT" />

      </FillSection>

    </Section>
  );
};


export default About;
