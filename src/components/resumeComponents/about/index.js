import React from 'react';

import AboutPanel from './AboutPanel';
//:TODO do I really want to load the images from here??
import imgs from '../../../bin/images';
import AboutSidebar from './AboutSidebar';
import SectionFoot from '../../SectionFoot';
import { buttons, Section, FillSection } from '../../displayComponents';


const { Button } = buttons;

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

  let mql = (props.mql === 'MED') || (props.mql === 'SML');

  return (
    <Section id="about">
      <div style={styles.aboutBackground} />

      <AboutSidebar
        style={style}
        burgerOpen={burger.about}
        content={{...contact, about}} />

      <FillSection>

        {
          mql ? (
            <Button
              className="burgerButton"
              onClick={() => props.burgerToggle( burger.about )}
              style={{
                zIndex: 9999,
                position: 'absolute',
                top: '5%',
                right: '5%'
              }}>{'III'}</Button>
          ) : null
        }

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
