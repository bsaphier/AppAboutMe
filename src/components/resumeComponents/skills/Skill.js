import React, { Component } from 'react';

import colors from '../../../bin/colors';
import Modernizr from '../../../../.modernizrrc';


const transform = Modernizr.prefixed('transform');


const styles = {
  skillContainer: {
    color: colors.OPERA_MAUVE,
    letterSpacing: '-0.03em',
    fontSize: '2rem',
    fontWeight: 400,
    textAlign: 'center'
  },
  skillChar: {
    cursor: 'default',
    display: 'inline-block',
    position: 'relative',

    perspective: 900,

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
    WebkitTransition: 'all ease .2s',
    MozTransition: 'all ease .2s',
    OTransition: 'all ease .2s',
    transition: 'all ease .2s'
  },
  charBefore: {
    zIndex: 1,
    color: 'rgba(0, 0, 0, 0.3)',
    [ transform ]: 'scale(1.038, 1) skew(0deg, 10deg)'
  },
  charAfter: {
    zIndex: 2,
    color: colors.MENU_DARK,
    textShadow: `1px 0 0.01px ${colors.MENU_DARKER}`,
    [ transform ]: 'rotateY(-20deg)'
  }
};


class Skill extends Component {
  constructor(props ) {
    super(props);
    this.state = {
      shadowScale: 1.038,
      initialSkew: -10,
      hoverSkew: -38,
      hoverShadowSkew: ((-38 / 2) * -1),
      initialShadowSkew: ((-10 / 2) * -1),

      characters: props.skill.split('')
    };

    this.handleLeave = this.handleLeave.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }


  handleLeave( index ) {
    let { shadowScale, initialSkew, initialShadowSkew } = this.state;
    let [ before, _, after ] = this[index].children;

    //:TODO refactor to React-Motion spring??
    before.style[transform] = `scale(${shadowScale}, 1) skew(0deg, ${initialShadowSkew}deg)`;
    after.style[transform] = `rotateY(${initialSkew}deg)`;
  }


  handleEnter( index ) {
    let { shadowScale, hoverSkew, hoverShadowSkew } = this.state;
    let [ before, _, after ] = this[index].children;

    //:TODO refactor to React-Motion spring??
    before.style[transform] = `scale(${shadowScale}, 1) skew(0deg, ${hoverShadowSkew}deg)`;
    after.style[transform] = `rotateY(${hoverSkew}deg)`;
  }


  render() {
    let { characters } = this.state;
    let { style, color } = this.props;
    let letterColor = color ? { color } : {};

    let styleParent = styles.skillChar;
    let styleBefore = { ...styles.charPseudo, ...styles.charBefore};
    let styleAfter = { ...styles.charPseudo, ...styles.charAfter, ...letterColor};

    return (
      <div className="skill" style={{ ...styles.skillContainer, ...style}}>
        {
          characters.map((char, idx) => {
            let index = `${char}-${idx}`;
            let key = `${this.props.skill}-${idx}`;

            return (
              <span
                key={key}
                style={styleParent}
                onMouseEnter={ () => this.handleEnter(index) }
                onMouseLeave={ () => this.handleLeave(index) }
                ref={ ref => { this[index] = ref; } }
                >
                <span style={styleBefore}>{ char }</span>
                <span>{ char }</span>
                <span style={styleAfter}>{ char }</span>
              </span>
            );
          })
        }
      </div>
    );
  }
}


export default Skill;
