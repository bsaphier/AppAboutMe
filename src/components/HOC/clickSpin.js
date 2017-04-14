import React from 'react';
import { Motion, presets, spring } from 'react-motion';

import Modernizr from '../../../.modernizrrc';
import { int } from '../../bin/utils';


//:TODO DRY this up with hoverSpin
//:TODO DRY this up with hoverSpin
//:TODO DRY this up with hoverSpin


// React motion settings //:TODO move to ../../bin
const motionConfig = {
  scale: {stiffness: 300, damping: 10},
  degree: {stiffness: 150, damping: 25}
};

const transform = Modernizr.prefixed('transform');


// the clickSpin HOC takes two props: initialColor & clickColor which are
// arrays of RGBA values
const clickSpin = (Component) => {
  return class ClickSpin extends React.Component {

    constructor(props) {
      super(props);
      this.state = { buttonUp: true };
      this.clicked = this.clicked.bind(this);
      this.unClicked = this.unClicked.bind(this);
    }
    //
    //
    // // only for the setTimeout . . .
    // componentDidMount() {
    //   this._mounted = true;
    // }
    //
    // // . . . and again
    // componentWillUnmount() {
    //   this._mounted = false;
    // }


    clicked() {
      this.setState({ buttonUp: false });

      // setTimeout(this.unClicked, 1200);
    }


    unClicked() {
      // because of the setTimeout callback in this.clicked
      // if (this._mounted) {
        this.setState({ buttonUp: true });
      // }
    }


    render() {
      let { buttonUp } = this.state;
      let componentStyle = this.props.style;
      let [redCC, greenCC, blueCC, aCC] = this.props.clickColor;
      let [redIC, greenIC, blueIC, aIC] = this.props.initialColor;


      let motion = buttonUp
        ? {
            red: spring(redIC),
            green: spring(greenIC),
            blue: spring(blueIC),
            opac: spring(aIC),

            scale: spring(1, motionConfig.scale),
            degree: spring(360, motionConfig.degree)
          }
        : {
            red: spring(redCC),
            green: spring(greenCC),
            blue: spring(blueCC),
            opac: spring(aCC),

            scale: spring(1.62, motionConfig.scale),
            degree: spring(0, motionConfig.degree)
          };


      const motionCallback = ({ red, blue, green, opac, scale, degree }) => (
        <Component
          {...this.props}
          style={{
            ...componentStyle,
            [ transform ]: `${componentStyle[ transform ]} rotateY(${degree}deg) scale(${scale})`,
            color: `rgba(${int(red)}, ${int(green)}, ${int(blue)}, ${opac})`
          }}
        />
      );


      return (
        <div
          className="clickSpinHOC"
          onMouseOver={this.clicked}
          onMouseOut={this.unClicked}
          onMouseDown={this.unClicked}>
          <Motion style={motion}>
            { motionCallback }
          </Motion>
        </div>
      );
    }
  };
};


export default clickSpin;
