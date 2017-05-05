import React from 'react';

//:TODO do I really want to load the images from here??
import imgs from '../../bin/images';
import colors from '../../bin/colors';
import Modernizr from '../../../.modernizrrc';
import { hoverSpin } from '../HOC';
import {
  buttons,
  Cell,
  Title,
  Section,
  FillSection,
  SideSection,
  SectionFoot
} from '../displayComponents';

const { IconButton } = buttons;
const SocialButton = hoverSpin(IconButton);
const transform = Modernizr.prefixed('transform');


const styles = {
  background: {
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
  },

  aboutPanel: {
    position: 'absolute',
    zIndex: 9,
    top: '50%',
    left: '48%',
    width: '50%',
    height: '38%',
    [ transform ]: 'translate(-50%, -50%)'
  },
  aboutPanelContent: {
    position: 'relative',
    zIndex: 9,
    width: '100%',
    height: '100%',
    padding: '1rem 2rem',
    overflow: 'hidden',
    color: colors.CHINESE_VIOLET,
    background: '#FFF',
  },

  socialButtons: {
    position: 'absolute',
    bottom: '20px',
    cursor: 'default',
    color: colors.MENU_DARK,
    fontSize: '1.1rem',
  },

  // 3D shadow effect
  before: {
    zIndex: 1,
    position: 'absolute',
    left: '5px',
    bottom: '15px',
    width: '50%',
    height: '15%',
    maxHeight: '20px',

    WebkitBoxShadow: '0 15px 10px rgba(0, 0, 0, 0.38)',
    MozBoxShadow: '0 15px 10px rgba(0, 0, 0, 0.38)',
    boxShadow: '0 15px 10px rgba(0, 0, 0, 0.38)',
    [ transform ]: 'rotate(-3deg)',
  },
  after: {
    right: '5px',
    left: null,
    [ transform ]: 'rotate(3deg)',
  }
};


const About = ({ content: { about, contact }, style }) => {

  const socialButtons = contact.links.map( link => (
    <SocialButton
      url={link.url}
      key={link.name}
      name={link.name}
      icon={link.icon}
      hoverColor={[45, 45, 45]}
      initialColor={[255, 68, 62]}
    />
  ));

  return (
    <Section id="about">
      <div className="background" style={styles.background} />

      <SideSection title="Contact">
        <Title style={{ ...style.title, fontSize: '3rem', letterSpacing: '-0.05em' }}>
          <span>Contact</span>
        </Title>
        <Cell style={{height: '62%'}}>

          <span>FILLER</span>

        </Cell>
        <div style={styles.socialButtons}>{ socialButtons }</div>
      </SideSection>

      <FillSection>
        <div style={styles.aboutPanel}>
          <div style={styles.before} />

          <div className="about-panel" style={styles.aboutPanelContent}>
            <Title className="shadow" style={style.title}>
              <span>WHO I AM</span>
            </Title>
            <p style={style.text}>{ about }</p>
          </div>

          <div style={{...styles.before, ...styles.after}} />
        </div>
        <SectionFoot to="projects" text="NEXT" />
      </FillSection>
    </Section>
  );
};


export default About;
