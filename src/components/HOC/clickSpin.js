import React from 'react';
import { Motion, presets, spring } from 'react-motion';

import Modernizr from '../../../.modernizrrc';
import { int } from '../../bin/utils';


//:TODO DRY this up with hoverSpin
//:TODO DRY this up with hoverSpin
//:TODO DRY this up with hoverSpin

const transform = Modernizr.prefixed('transform');


const styles = {
  content: {
    // margin: '.3em .3em',
    // display: 'inline-block'
  }
};


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


    // only for the setTimeout . . .
    componentDidMount() {
      this._mounted = true;
    }


    componentWillUnmount() {
      this._mounted = false;
    }


    clicked() {
      this.setState({ buttonUp: false });

      // setTimeout(this.unClicked, 1000);
    }


    unClicked() {
      // because of the setTimeout callback in this.clicked()
      // if (this._mounted) {}
      this.setState({ buttonUp: true });
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

            degree: spring(360, presets.gentle),
            shadowX: spring(-3, presets.stiff),
            shadowY: spring(2, presets.stiff),
          }
        : {
            red: spring(redCC),
            green: spring(greenCC),
            blue: spring(blueCC),
            opac: spring(aCC),

            degree: spring(0, presets.wobbly),
            shadowX: spring(-1, presets.gentle),
            shadowY: spring(1, presets.gentle),
          };


      return (
        <div
          className="clickSpinHOC"
          onMouseOut={this.unClicked}
          onMouseDown={this.clicked}
          style={styles.content}
          >
          <Motion style={motion}>

            {({ red, blue, green, opac, degree, shadowX, shadowY }) => (
              <div style={{ [ transform ]: `rotateY(${degree}deg)` }}>
                <Component
                  {...this.props}
                  style={{
                    ...componentStyle,
                    boxShadow: `${shadowX}px ${shadowY}px 5px -1px rgba(81, 81, 81, 0.3)`,
                    background: `rgba(${int(red)}, ${int(green)}, ${int(blue)}, ${opac})`
                  }}
                />
              </div>
            )}

          </Motion>
        </div>
      );
    }
  };

};


export default clickSpin;
