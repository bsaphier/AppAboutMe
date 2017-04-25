import React, { Component } from 'react';

import colors from '../../../bin/colors';
import Modernizr from '../../../../.modernizrrc';


const transform = Modernizr.prefixed('transform');


const styles = {
  skillContainer: {
    color: '#fff',
    fontSize: '4rem',
    fontWeight: 900
  },
  skillChar: {
    cursor: 'default',
    display: 'inline-block',
    position: 'relative',

    perspective: 600,

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
    WebkitTransition: 'all ease-out .1s',
    MozTransition: 'all ease-out .1s',
    OTransition: 'all ease-out .1s',
    transition: 'all ease-out .1s'
  },
  charBefore: {
    zIndex: 1,
    color: 'rgba(0, 0, 0, 0.2)',
    [ transform ]: 'scale(1.062, 1) skew(0deg, 20deg)'
  },
  charAfter: {
    zIndex: 2,
    color: colors.AMETHYST,
    textShadow: `-1px 0 0.5px ${colors.AMETHYST}, 1px 0 0.5px rgba(0, 0, 0, .8)`,
    [ transform ]: 'rotateY(-40deg)'
  }
};


class Skill extends Component {
  constructor(props ) {
    super(props);
    this.state = {
      shadowScale: 1.062,
      letterSpacing: 0.3,
      initialSkew: -40,
      hoverSkew: -10,
      hoverShadowSkew: ((-10 / 2) * -1),
      initialShadowSkew: ((-40 / 2) * -1),

      characters: props.skill.split('')
    };

    this.handleLeave = this.handleLeave.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }


  handleLeave( index ) {
    let { shadowScale, initialSkew, initialShadowSkew } = this.state;
    let [ before, _, after ] = this[index].children;

    before.style[transform] = `scale(${shadowScale}, 1) skew(0deg, ${initialShadowSkew}deg)`;
    after.style[transform] = `rotateY(${initialSkew}deg)`;
  }


  handleEnter( index ) {
    let { shadowScale, hoverSkew, hoverShadowSkew } = this.state;
    let [ before, _, after ] = this[index].children;

    before.style[transform] = `scale(${shadowScale}, 1) skew(0deg, ${hoverShadowSkew}deg)`;
    after.style[transform] = `rotateY(${hoverSkew}deg)`;
  }


  render() {
    let { characters } = this.state;

    return (
      <div className="skill" style={styles.skillContainer}>
        {
          characters.map((char, idx) => {
            let key = `${this.props.skill}-${idx}`;
            let index = `${char}-${idx}`;
            let styleAfter = { ...styles.charPseudo, ...styles.charAfter};
            let styleBefore = { ...styles.charPseudo, ...styles.charBefore};
            let styleParent = idx === 0
              ? styles.skillChar
              : { ...styles.skillChar, marginLeft: '0.16em' };

            return (
              <span
                key={key}
                style={styleParent}
                onMouseEnter={ () => this.handleEnter(index) }
                onMouseLeave={ () => this.handleLeave(index) }
                ref={ ref => { this[index] = ref; } }
                >
                <span id="1" style={styleBefore}>{ char }</span>
                <span id="2" >{ char }</span>
                <span id="3" style={styleAfter}>{ char }</span>
              </span>
            );
          })
        }
      </div>
    );
  }
}


export default Skill;
