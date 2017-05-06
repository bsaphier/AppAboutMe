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
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0',
    fontSize: '1rem',
    fontWeight: '100',
  },
  aboutSidebarItem: {
    display: 'flex',
    margin: '0 0 40px 0',
    justifyContent: 'space-between'
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
    color: colors.MENU_DARK,
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
        hoverColor={[45, 45, 45]}
        initialColor={[255, 68, 62]}
      />
      <div style={{fontSize: '0.7rem', margin: '0 auto'}}>
        <span>{link.name}</span>
      </div>
    </div>
  ));

  return (
    <Section id="about">
      <div className="background" style={styles.background} />

      <SideSection title="Contact">
        <Title style={{ ...style.title, fontSize: '3rem', letterSpacing: '-0.05em' }}>
          <span>Contact</span>
        </Title>
        <Divider />
        <div style={styles.aboutSidebarContent}>

          <div style={styles.aboutSidebarItem}>
            <span style={{ fontStyle: 'italic' }}>Send Me An Email:</span>
            <span style={{ fontWeight: 400 }}>{ contact.email }</span>
          </div>
          <div style={styles.aboutSidebarItem}>
            <span style={{ fontStyle: 'italic' }}>My Home Base:</span>
            <span style={{ fontWeight: 400 }}>{ contact.location }</span>
          </div>

        </div>
        <Divider />
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
