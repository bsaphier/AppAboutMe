import React from 'react';
import { Motion, presets, spring } from 'react-motion';

import { int } from '../../bin/utils';


const styles = {
  content: {
    margin: '.3em .3em',
    display: 'inline-block',

    // WebkitTransition: 'all .8s ease-in-out',
    // MozTransition: 'all .8s ease-in-out',
    // transition: 'all .8s ease-in-out'
  }
};


const hoverSpin = (Component) => {
  return class HoverSpin extends React.Component {

    constructor(props) {
      super(props);

      let [red, green, blue] = props.initialColor;

      this.state = {
        redA: red,
        greenA: green,
        blueA: blue,
        redB: red,
        greenB: green,
        blueB: blue,

        shadow: 0.25,
        shadowX: -1,
        shadowY: 1,
        degree: 0,
      };

      this.hover = this.hover.bind(this);
      this.leave = this.leave.bind(this);
    }


    hover() {
      // *TODO check if hoverColor is nested array
      let [redA, greenA, blueA] = this.props.hoverColor[0];
      let [redB, greenB, blueB] = this.props.hoverColor[1];

      this.setState({
        redA: spring(redA),
        greenA: spring(greenA),
        blueA: spring(blueA),
        redB: spring(redB),
        greenB: spring(greenB),
        blueB: spring(blueB),

        shadow: spring(0.4, presets.stiff),
        shadowX: spring(-3, presets.stiff),
        shadowY: spring(2, presets.stiff),
        degree: spring(360, presets.gentle)
      });
    }


    leave() {
      this.setState({
        redA: spring(45),
        greenA: spring(45),
        blueA: spring(45),
        redB: spring(45),
        greenB: spring(45),
        blueB: spring(45),

        shadow: spring(0.25, presets.stiff),
        shadowX: spring(-1, presets.stiff),
        shadowY: spring(1, presets.stiff),
        degree: spring(0, presets.gentle)
      });
    }


    render() {
      return (
        <div className="hoverSpinHOC" style={styles.content}>
          <Motion style={this.state}>

            {({ redA, redB, blueA, blueB, greenA, greenB, degree, shadow, shadowX, shadowY }) => (
              <div
                onMouseOver={this.hover}
                onMouseLeave={this.leave}
                style={{
                  MozTransform: `rotateY(${degree}deg)`,
                  WebkitTransform: `rotateY(${degree}deg)`,
                  transform: `rotateY(${degree}deg)`
                }}
                >
                <Component
                  {...this.props}
                  style={{
                    boxShadow: `${shadowX}px ${shadowY}px 5px -1px rgba(81, 81, 81, ${shadow})`,
                    background:
                      `linear-gradient(to top right, rgb(${int(redA)}, ${int(greenA)}, ${int(blueA)}) 62%, rgb(${int(redB)}, ${int(greenB)}, ${int(blueB)}) 162%)`
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

export default hoverSpin;
