import React, { Component } from 'react';

import colors from '../../../bin/colors';
import Modernizr from '../../../../.modernizrrc';


const transform = Modernizr.prefixed('transform');


const styles = {
  skillContainer: {
    color: '#fff',
    fontSize: '4em',
    fontWeight: 900
  },
  skillChar: {
    cursor: 'default',
    display: 'inline-block',
    position: 'relative',

    perspective: 500,

    WebkitTransformStyle: 'preserve-3d',
    MozTransformStyle: 'preserve-3d',
    OTransformStyle: 'preserve-3d',
    transformStyle: 'preserve-3d',

    WebkitFontSmoothing: 'antialiased'
  },
  charPseudo: {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: '-1px',

    WebkitTransformOrigin: 'left top',
    MozTransformOrigin: 'left top',
    OTransformOrigin: 'left top',
    transformOrigin: 'left top',

    //:TODO do I want to refactor to React-Motion spring??
    WebkitTransition: 'all ease-out .3s',
    MozTransition: 'all ease-out .3s',
    OTransition: 'all ease-out .3s',
    transition: 'all ease-out .3s'
  },
  charBefore: {
    zIndex: 1,
    color: 'rgba(0, 0, 0, 0.2)',
    [ transform ]: 'scale(1.1, 1) skew(0deg, 20deg)'
  },
  charAfter: {
    zIndex: 2,
    color: colors.AMETHYST,
    textShadow: `-1px 0 1px ${colors.AMETHYST}, 1px 0 1px rgba(0, 0, 0, .8)`,
    [ transform ]: 'rotateY(-40deg)'
  }
};


class Skill extends Component {
  constructor(props ) {
    super(props);
    this.state = {
      shadowScale: 1.1,
      letterSpacing: 0.3,
      initialSkew: -40,
      hoverSkew: -10,

      characters: props.skill.split('')
    };

    this.handleLeave = this.handleLeave.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }


  handleLeave({ target }) {
    let { shadowScale, initialSkew } = this.state;
    let { before, after } = this[target.innerText];
    let initialShadowSkew = ((initialSkew / 2) * -1);

    before.style[transform] = `scale(${shadowScale}, 1) skew(0deg, ${initialShadowSkew}deg)`;
    after.style[transform] = `rotateY(${initialSkew}deg)`;
  }


  handleEnter({ target }) {
    let { before, after } = this[target.innerText];
    before.style[transform] = ``;
    after.style[transform] = ``;
  }


  render() {
    let { characters, initialSkew, hoverSkew } = this.state;

    const initialShadowSkew = ((initialSkew / 2) * -1);
    const hoverShadowSkew = ((hoverSkew / 2) * -1);

    return (
      <div className="skill" style={styles.skillContainer}>
        {
          characters.map((char, idx) => {
            this[char] = { before: null, after: null };

            let key = `${this.props.skill}-${+idx}`;
            let styleAfter = { ...styles.charPseudo, ...styles.charAfter};
            let styleBefore = { ...styles.charPseudo, ...styles.charBefore};

            return (
              <span
                key={key}
                style={styles.skillChar}
                onMouseEnter={this.handleEnter}
                onMouseLeave={this.handleLeave}
                >
                <span style={styleBefore} ref={ref => { this[char].before = ref; }}>{ char }</span>
                { char }
                <span style={styleAfter} ref={ref => { this[char].after = ref; }}>{ char }</span>
              </span>
            );
          })
        }
      </div>
    );
  }
}


export default Skill;
