import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';


// React motion settings //:TODO move to ../../bin
const motionConfig = {stiffness: 390, damping: 20};


const styles = {
  button: {
    cursor: 'default',
    padding: '0.5rem',
    whiteSpace: 'pre-line',

    width: '100%',

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
    let { style, target, children, link = null, title = '_blank', ...props } = this.props;


    let motion = (buttonUp)
      ? {
          textOpac: spring(1, motionConfig),
          bshadow: spring(0, motionConfig)
        }
      : {
          textOpac: spring(0, motionConfig),
          bshadow: spring(1, motionConfig)
        };


    const motionCallback = ({ textOpac, bshadow }) => {
      return (
        <div
          style={{
            ...styles.button,
            color: `rgba(45, 45, 45, ${textOpac})`,
            textShadow: `rgba(45, 45, 45, 1) -${bshadow}px ${bshadow}px 0px`,
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
