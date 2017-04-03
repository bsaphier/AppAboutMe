import React, { Component} from 'react';
import { Motion, spring } from 'react-motion';

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
  }


  render() {

    let { buttonUp } = this.state;
    let { style, link, title, target, children, ...props } = this.props;

    let motionConfig = {stiffness: 390, damping: 20};

    let motion = buttonUp
      ? {
          bx: spring(0.5, motionConfig),
          by: spring(-1.5, motionConfig),
          bcolor: 1,
          bdepth: spring(1, motionConfig),
          bspread: spring(3, motionConfig)
        }
      : {
          bx: spring(-0.5, motionConfig),
          by: spring(2.5, motionConfig),
          bdepth: spring(2, motionConfig),
          bcolor: 0,
          bspread: spring(5, motionConfig),
          bshadow: 1
        };

    return (
      <a href={link ? link : null} title={title} target={target ? target : '_blank'}>

        <Motion style={motion}>
          {({ bx, by, bspread, bcolor, bdepth, bshadow }) => {

            let motionStyle = {
              color: `rgba(45, 45, 45, ${bcolor})`,
              textShadow: bshadow ? `rgba(81, 81, 81, 1) -${bshadow}px ${bshadow}px 0px` : null,
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
