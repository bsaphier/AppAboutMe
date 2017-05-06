import React from 'react';

//:TODO do I really want to load the images from here??
import imgs from '../../bin/images';
import colors from '../../bin/colors';
import Modernizr from '../../../.modernizrrc';
import { hoverSpin } from '../HOC';
import {
  buttons,
  Title,
  Section,
  Divider,
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

  aboutSidebarContent: {
    height: '78%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    padding: '0 1px ',
    cursor: 'default',
    fontSize: '1.1rem',
    fontWeight: '100',
    color: colors.MENU_DARKER,
  },
  aboutSidebarLabel: {
    display: 'block',
    padding: '0 3px',
    letterSpacing: '0.05rem',
    textTransform: 'uppercase'
  },
  aboutSidebarInfo: {
    display: 'block',
    padding: '0 5px',
    fontSize: '2rem',
    fontWeight: 900,
    textAlign: 'right',
    letterSpacing: '-0.1rem'
  },
  socialButtons: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    width: '100%',
    cursor: 'default',
    margin: '15px 0 0',
    color: colors.MENU_DARK,
    fontSize: '1rem',
  },
  socialButtonWrap: {
    textAlign: 'center',
  },
  socialButtonLabel: {
    color: colors.MENU_DARKER,
    fontSize: '0.7rem',
    fontWeight: 400,
    margin: '0 auto'
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
    color: colors.MENU_DARKER,
    background: '#FFF',
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
    <div key={link.name} style={styles.socialButtonWrap}>
      <SocialButton
        url={link.url}
        name={link.name}
        icon={link.icon}
        hoverColor={[255, 68, 62]}
        initialColor={[45, 45, 45]}
      />
      <div style={styles.socialButtonLabel}><span>{ link.name }</span></div>
    </div>
  ));

  return (
    <Section id="about">
      <div className="background" style={styles.background} />

      <SideSection title="Contact">
        <Title style={style.title}>
          <span>Contact</span>
        </Title>
        <Divider style={{background: colors.AMETHYST}} />

        <div style={styles.aboutSidebarContent}>
          <div style={{margin: '30px 0'}}>
            <span style={styles.aboutSidebarLabel}>Send Me An Email:</span>
            <Divider style={{width: '62%', background: colors.CORAL_RED}} />
            <span style={styles.aboutSidebarInfo}>{ contact.email }</span>
          </div>

          <div style={{margin: '30px 0'}}>
            <span style={styles.aboutSidebarLabel}>My Home Base:</span>
            <Divider style={{width: '62%', background: colors.CORAL_RED}} />
            <span style={styles.aboutSidebarInfo}>{ contact.location }</span>
          </div>

          <div style={{margin: '30px 0'}}>
            <span style={styles.aboutSidebarLabel}>Social Media n' Stuff:</span>
            <Divider style={{width: '62%', background: colors.CORAL_RED}} />
            <div style={styles.socialButtons}>{ socialButtons }</div>
          </div>
        </div>
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
