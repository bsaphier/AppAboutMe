import React, { Component} from 'react';
import { Motion, spring } from 'react-motion';

import Modernizr from '../../../../.modernizrrc';
import { int } from '../../../bin/utils';


// React motion settings //:TODO move to ../../bin
const fade = {stiffness: 160, damping: 21};
const bounce = {stiffness: 400, damping: 15};


const transform = Modernizr.prefixed('transform');

const styles = {
  sidebarButton: {
    cursor: 'default',
    padding: '0.5rem',
    whiteSpace: 'pre-line',

    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '0.13rem'
  }
};

//  this c takes a prop, colors -  which is an object with two keys: baseColor & hoverColor which
// are arrays of RGB values
class SidebarButton extends Component {
  constructor( props ) {
    super(props);
    this.state = { buttonUp: false };

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
    let {
      style,
      target,
      children,
      link = null,
      title = '_blank',
      colors: {baseColor, hoverColor},
      ...props
    } = this.props;

    //:TODO get the bgColor from props
    let motion = (buttonUp)
      ? {
          offset:  spring(5, bounce),
          red:     spring(hoverColor[0]),
          green:   spring(hoverColor[1]),
          blue:    spring(hoverColor[2])
        }
      : {
          offset:  spring(0, fade),
          red:     spring(baseColor[0]),
          green:   spring(baseColor[1]),
          blue:    spring(baseColor[2])
        };


    const motionCallback = ({ red, green, blue, offset }) => {
      let i, boxShadow = [];

      for (i = Math.round(offset); i > 0; i--) {
        let color = 45 +  i * i;
        let shadowOffset = offset - i + 1;
        boxShadow.push(`rgb(${color}, ${color}, ${color}) ${shadowOffset}px ${shadowOffset}px`);
      }

      return (
        <div
          style={{
            ...styles.sidebarButton,
            boxShadow: boxShadow.join(', '),
            [ transform ]: `translate(-${offset}px, -${offset}px)`,
            borderColor: `rgba(45, 45, 45, ${offset / 5})`,
            backgroundColor: `rgb(${int(red)}, ${int(green)}, ${int(blue)})`,
            ...style
          }}
          {...props}>
          { children }
        </div>
      );
    };


    return (
      <div
        className="sidebar-button"
        onMouseUp={this.buttonUp}
        onMouseOver={this.buttonUp}
        onMouseOut={this.buttondown}
        onMouseDown={this.buttondown}
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

export default SidebarButton;
