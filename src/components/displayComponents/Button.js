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
          bcolor: 1,
          bdepth: 1,
          bspread: 3,
        }
      : {
          bx: -0.5,
          by: 0.5,
          bdepth: 3,
          bcolor: 0.3,
          bspread: 8,
          bshadow: 1,
        };

    return (
      <a href={link ? link : null} title={title}>

        <Motion style={motion}>
          {({ bx, by, bspread, bcolor, bdepth, bshadow }) => {

            let motionStyle = {
              color: `rgba(45, 45, 45, ${bcolor})`,
              textShadow: bshadow ? `rgba(45, 45, 45, 0.8) -${bshadow}px ${bshadow}px 0px` : null,
              boxShadow: `inset rgba(45, 45, 45, 0.5) ${bx}px ${by}px ${bspread}px ${bdepth}px`
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
