import React from 'react';
import { Motion, presets, spring } from 'react-motion';

import { int } from '../../bin/utils';
import Modernizr from '../../../.modernizrrc';


//:TODO DRY this up with hoverSpin
//:TODO DRY this up with hoverSpin
//:TODO DRY this up with hoverSpin


const transform = Modernizr.prefixed('transform');


const styles = {
  content: {
    margin: '.3em .3em',
    display: 'inline-block'
  }
};


// the clickSpin HOC takes two props: initialColor & clickColor which are
// arrays of RGB values
const clickSpin = (Component) => {
  return class HoverSpin extends React.Component {

    constructor(props) {
      super(props);

      let [red, green, blue, opac] = props.initialColor;

      this.state = {
        motion: {
          red: spring(red),
          green: spring(green),
          blue: spring(blue),
          opac: spring(opac || 1),

          degree: 0,
          shadowX: -1,
          shadowY: 1,
          shadow: props.shadow || 0.25
        }
      };

      this.click = this.click.bind(this);
      this.leave = this.leave.bind(this);
    }


    // only for the setTimeout . . .
    componentDidMount() {
      this._mounted = true;
    }


    componentWillUnmount() {
      this._mounted = false;
    }


    click() {
      let [red, green, blue, opac] = this.props.clickColor;

      this.setState({
        motion: {
          red: spring(red),
          green: spring(green),
          blue: spring(blue),
          opac: spring(opac),

          degree: spring(360, presets.gentle),
          shadow: spring(this.props.shadow || 0.4, presets.stiff),
          shadowX: spring(-3, presets.stiff),
          shadowY: spring(2, presets.stiff),
        }
      });

      setTimeout(this.leave, 1000);
    }


    leave() {

      let [red, green, blue, opac] = this.props.initialColor;

      // because of the setTimeout callback in this.click()
      if (this._mounted) {
        this.setState({
          motion: {
            red: spring(red),
            green: spring(green),
            blue: spring(blue),
            opac: spring(opac || 1),

            degree: spring(0, presets.wobbly),
            shadow: spring(this.props.shadow || 0.25, presets.gentle),
            shadowX: spring(-1, presets.gentle),
            shadowY: spring(1, presets.gentle),
          }
        });
      }
    }


    render() {
      return (
        <div
          className="clickSpinHOC"
          onMouseOut={this.leave}
          onMouseDown={this.click}
          style={styles.content}
          >
          <Motion style={this.state.motion}>

            {({ red, blue, green, opac, degree, shadow, shadowX, shadowY }) => (
              <div style={{ [ transform ]: `rotateY(${degree}deg)` }}>
                <Component
                  {...this.props}
                  style={{
                    ...this.props.style,
                    boxShadow: `${shadowX}px ${shadowY}px 5px -1px rgba(81, 81, 81, ${shadow})`,
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
