import React from 'react';
import AboutPanel from './AboutPanel';
import AboutSidebar from './AboutSidebar';
import SectionFoot from '../../SectionFoot';
import { buttons, Section, FillSection } from '../../displayComponents';
import { styles } from '../../../styles';


const { Button } = buttons;
const SECTION_NAME = 'about';

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
      <div style={styles.resumeComponents.about.aboutBackground} />

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
