import React from 'react';

import colors from '../../../bin/colors';
import Modernizr from '../../../../.modernizrrc';
import { Title, Divider, buttons } from '../../displayComponents';
import { hoverSpin } from '../../HOC';


const { IconButton } = buttons;
const SocialButton = hoverSpin(IconButton);

const transform = Modernizr.prefixed('transform');


const styles = {
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
    padding: '10px 20px',
    overflow: 'scroll',
    color: colors.MENU_DARKER,
    background: '#FFF',
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

  // 3D shadow effect
  aboutPanelBefore: {
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
  aboutPanelAfter: {
    right: '5px',
    left: null,
    [ transform ]: 'rotate(3deg)',
  }
};


const AboutPanel = ({ style, content, burgerOpen }) => {

  let btnLinks;

  if (!burgerOpen) {

    const socialButtons = content.links.map( link => (
      <div key={link.name} style={styles.socialButtonWrap}>
        <SocialButton
          url={link.url}
          name={link.name}
          icon={link.icon}
          hoverColor={[255, 68, 62]}
          initialColor={[45, 45, 45]} />
        <div style={styles.socialButtonLabel}><span>{ link.name }</span></div>
      </div>
    ));

    btnLinks = (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        { socialButtons }
      </div>
    );

  }

  return (
    <div className="about-panel" style={styles.aboutPanel}>
      <div style={styles.aboutPanelBefore} />
      <div style={styles.aboutPanelContent}>

        <Title style={{
          ...style.title,
          padding: '0 0.08em',
          fontSize: '2rem',
          fontWeight: '600',
          fontStyle: 'italic',
          letterSpacing: '0.05em' }}>
          <span>{`About  This  Site`}</span>
        </Title>

        <Divider style={{width: '62%', background: colors.AMETHYST}} />

        <p style={style.text}>{ content.siteInfo }</p>

        { btnLinks }

      </div>
      <div style={{...styles.aboutPanelBefore, ...styles.aboutPanelAfter}} />
    </div>
  );
};


export default AboutPanel;
