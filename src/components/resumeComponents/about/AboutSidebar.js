import React from 'react';

import colors from '../../../bin/colors';
import { buttons, Title, Divider, SideSection } from '../../displayComponents';
import { hoverSpin } from '../../HOC';

const { IconButton } = buttons;
const SocialButton = hoverSpin(IconButton);


const styles = {
  aboutSidebarContent: {
    height: '90%',
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
    padding: '0 1px',
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
  }
};


// label must be a string and info must be a valid react element
const sidebarContentMap = ({ index, label, info }) => (
  <div key={`about-sidebar-item${index}`} style={{margin: '30px 0'}}>
    <span style={styles.aboutSidebarLabel}>{ label }</span>
    <Divider style={{width: '62%', background: colors.CORAL_RED}} />
    { info }
  </div>
);


const AboutSidebar = ({ style, content }) => {

  const socialButtons = content.links.map( link => (
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

  const items = [
    {
      index: 0,
      label: 'About This Site:',
      info: (
        <span style={{
          ...styles.aboutSidebarInfo,
          fontSize: '1.62rem'
        }}>{ content.siteInfo }</span>
      )
    }, {
      index: 1,
      label: 'Send Me An Email:',
      info: (
        <span style={styles.aboutSidebarInfo}>
          <a href={`mailto:${content.email}`} target="_blank" rel="noopener noreferrer">{ content.email }</a>
        </span>
      )
    }, {
      index: 2,
      label: 'My Home Base:',
      info: (<span style={styles.aboutSidebarInfo}>{ content.location }</span>)
    }, {
      index: 3,
      label: 'Social Media n\' Stuff:',
      info: (<div style={styles.socialButtons}>{ socialButtons }</div>)
    }
  ];

  return (
    <SideSection title="Contact">

      <Title style={style.title}><span>Contact</span></Title>

      <Divider style={{background: colors.AMETHYST}} />

      <div style={styles.aboutSidebarContent}>
        { items.map(sidebarContentMap) }
      </div>

    </SideSection>
  );
};


export default AboutSidebar;
