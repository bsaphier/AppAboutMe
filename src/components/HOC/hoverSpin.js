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


// the hoverSpin HOC takes two props: initialColor & hoverColor
// which are arrays of RGB values. If hoverColor is a nested array the
// color is rendered as a gradient –– only the first two arrays are used
const hoverSpin = (Component) => {
  return class HoverSpin extends React.Component {

    constructor(props) {
      super(props);

      let [red, green, blue, tran = 1] = props.initialColor;

      this.state = {
        redA: red,
        redB: red,
        greenA: green,
        greenB: green,
        blueA: blue,
        blueB: blue,
        tranA: tran,
        tranB: tran,

        shadow: props.shadow || 0.25,
        shadowX: -1,
        shadowY: 1,
        degree: 0,
      };

      this.hover = this.hover.bind(this);
      this.leave = this.leave.bind(this);
    }


    hover() {
      // *TODO check if hoverColor is nested array
      let [redA, greenA, blueA, tranA = 1] = this.props.hoverColor[0];
      let [redB, greenB, blueB, tranB = 1] = this.props.hoverColor[1];

      this.setState({
        redA: spring(redA),
        greenA: spring(greenA),
        blueA: spring(blueA),
        redB: spring(redB),
        greenB: spring(greenB),
        blueB: spring(blueB),
        aA: spring(tranA),
        aB: spring(tranB),

        shadow: spring(0.4, presets.stiff),
        shadowX: spring(-3, presets.stiff),
        shadowY: spring(2, presets.stiff),
        degree: spring(360, presets.gentle)
      });
    }


    leave() {

      let [red, green, blue, tran = 1] = this.props.initialColor;

      this.setState({
        redA: spring(red),
        greenA: spring(green),
        blueA: spring(blue),
        tranA: spring(tran),
        redB: spring(red),
        greenB: spring(green),
        blueB: spring(blue),
        tranB: spring(tran),

        shadow: spring(this.props.shadow || 0.25, presets.stiff),
        shadowX: spring(-1, presets.stiff),
        shadowY: spring(1, presets.stiff),
        degree: spring(0, presets.gentle)
      });
    }


    render() {
      return (
        <div className="hoverSpinHOC" style={styles.content}>
          <Motion style={this.state}>

            {({
              redA,
              redB,
              blueA,
              blueB,
              greenA,
              greenB,
              tranA,
              tranB,
              degree,
              shadow,
              shadowX,
              shadowY
            }) => (
              <div
                onMouseOver={this.hover}
                onMouseOut={this.leave}
                style={{
                  MozTransform: `rotateY(${degree}deg)`,
                  WebkitTransform: `rotateY(${degree}deg)`,
                  transform: `rotateY(${degree}deg)`
                }}
                >
                <Component
                  {...this.props}
                  style={{
                    ...this.props.style,
                    boxShadow: `${shadowX}px ${shadowY}px 5px -1px rgba(81, 81, 81, ${shadow})`,
                    background:
                      `linear-gradient(to top right, rgba(${int(redA)}, ${int(greenA)}, ${int(blueA)}, ${tranA}) 62%, rgba(${int(redB)}, ${int(greenB)}, ${int(blueB)}, ${tranB}) 162%)`
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
