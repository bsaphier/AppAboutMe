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
    let { style, link, title, target, children, ...props } = this.props;


    //:TODO get the bgColor from props
    let motion = (buttonUp)
      ? {
          offset: spring(5, bounce),
          bgColor: spring(255)
        }
      : {
          offset: spring(0, fade),
          bgColor: spring(45)
        };


    const motionCallback = ({ offset, bgColor }) => {
      let i, boxShadow = [];

      for (i = Math.round(offset); i > 0; i--) {
        let shadowOffset = offset - i + 1;
        boxShadow.push(`${shadowOffset}px ${shadowOffset}px rgb(45, 45, 45)`);
      }

      return (
        <div
          style={{
            ...styles.sidebarButton,
            boxShadow: boxShadow.join(', '),
            [ transform ]: `translate(-${offset}px, -${offset}px)`,
            borderColor: `rgba(81, 81, 81, ${offset / 5})`,
            backgroundColor: `rgb(${int(bgColor)}, ${int(bgColor)}, ${int(bgColor)})`,
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
        <a href={link ? link : null} title={title} target={target ? target : '_blank'}>
          <Motion style={motion}>
            { motionCallback }
          </Motion>
        </a>
      </div>
    );
  }
}

export default SidebarButton;
