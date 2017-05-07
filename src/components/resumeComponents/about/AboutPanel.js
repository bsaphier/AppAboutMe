import React from 'react';

import colors from '../../../bin/colors';
import Modernizr from '../../../../.modernizrrc';
import { Title, Divider } from '../../displayComponents';

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


const AboutPanel = ({ style, content }) => (
  <div className="about-panel" style={styles.aboutPanel}>
    <div style={styles.aboutPanelBefore} />
    <div style={styles.aboutPanelContent}>

      <Title style={{ ...style.title, fontStyle: 'italic', fontWeight: 600, letterSpacing: '0.05em' }}>
        <span>WHO I AM</span>
      </Title>

      <Divider style={{width: '62%', background: colors.AMETHYST}} />

      <p style={style.text}>{ content }</p>

    </div>
    <div style={{...styles.aboutPanelBefore, ...styles.aboutPanelAfter}} />
  </div>
);


export default AboutPanel;
