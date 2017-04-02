import React, { Component} from 'react';
import { Motion, presets, spring } from 'react-motion';

const styles = {
  button: {
    cursor: 'pointer',
    margin: '.3em 0em',
    padding: '.3em 1em',

    fontWeight: 400,
    textAlign: 'center',
    textTransform: 'uppercase',

    color: 'rgb(45, 45, 45)',
    borderRadius: '.3em',
    background: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)'
  }
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonUp: true
    };

    this.buttonUp = this.buttonUp.bind(this);
    this.buttondown = this.buttondown.bind(this);
  }


  buttonUp() {
    this.setState({ buttonUp: true });
  }


  buttondown() {
    this.setState({ buttonUp: false });
    // setTimeout(this.buttonUp, 300);
  }


  render() {

    let { buttonUp } = this.state;
    let { style, link, title, children, ...props } = this.props;

    let motion = buttonUp
      ? {
          bx: 0.5,
          by: -1.5,
          bdepth: 1
        }
      : {
          bx: -0.5,
          by: 1.5,
          bdepth: 2
        };

    return (
      <a href={link ? link : null} title={title}>

        <Motion style={motion}>
          {(interpStyle) => {

            let motionStyle = {
              boxShadow: `inset rgba(45, 45, 45, 0.5) ${interpStyle.bx}px ${interpStyle.by}px 3px ${interpStyle.bdepth}px`
            };

            return (
              <div
                className="button"
                style={{...styles.button, ...motionStyle, ...style}}
                onMouseUp={this.buttonUp}
                onMouseOut={this.buttonUp}
                onMouseDown={this.buttondown}
                {...props}
                >
                { children }
              </div>
            );
          }}
        </Motion>

      </a>
    );
  }
}

export default Button;
