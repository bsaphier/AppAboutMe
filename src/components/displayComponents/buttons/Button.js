import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import Modernizr from '../../../../.modernizrrc';


// React motion settings //:TODO move to ../../bin
const motionConfig = {stiffness: 390, damping: 15};


const transform = Modernizr.prefixed('transform');

const styles = {
  button: {
    cursor: 'default',
    padding: '0.5rem',
    whiteSpace: 'pre-line',

    // width: '100%',

    fontWeight: 400,
    textAlign: 'center',
    letterSpacing: '-0.01rem',
    textTransform: 'uppercase',

    borderRadius: '0.13rem',
    background: 'rgb(255, 68, 62)'
  }
};


class Button extends Component {
  constructor( props ) {
    super(props);
    this.state = { buttonUp: true };

    this.buttonUp = this.buttonUp.bind(this);
    this.buttondown = this.buttondown.bind(this);
  }


  buttonUp() {
    this.setState({ buttonUp: true });
  }


  buttondown() {
    this.setState({ buttonUp: false });
  }


  render() {
    let { buttonUp } = this.state;
    let { style, target = '_blank', children, link = null, title = null, ...props } = this.props;


    let motion = (buttonUp)
      ? {
          offset: spring(0, motionConfig),
          textOpac: spring(1),
        }
      : {
          offset: spring(5, motionConfig),
          textOpac: spring(0.2),
        };


    const motionCallback = ({ textOpac, offset }) => {
      let i, boxShadow = [], textShadow = [], offsetInt = Math.round(offset);

      for (i = offsetInt; i > 0; i--) {
        let shadowOffset = offset - i + 1;
        boxShadow.push(`rgb(45, 45, 45) ${shadowOffset}px ${shadowOffset}px`);
        textShadow.push(`rgba(45, 45, 45, ${i * textOpac}) ${shadowOffset}px ${shadowOffset}px 0.1px`);
      }

      return (
        <div
          style={{
            ...styles.button,
            color: `rgb(255, 255, 255)`,
            [ transform ]: `translate(-${offset}px, -${offset}px)`,
            boxShadow: boxShadow.join(', '),
            textShadow: textShadow.join(', '),
            ...style
          }}
          {...props}>
          { children }
        </div>
      );
    };


    return (
      <div
        className="button"
        onMouseUp={this.buttonUp}
        onMouseOut={this.buttonUp}
        onMouseDown={this.buttondown}
        onMouseOver={this.buttondown}
        >
        <a href={link} title={title} target={target}>
          <Motion style={motion}>
            { motionCallback }
          </Motion>
        </a>
      </div>
    );
  }
}

export default Button;
