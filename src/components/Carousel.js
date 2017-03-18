/* eslint-disable no-return-assign */
import React, { Component } from 'react';

import Modernizr from '../../.modernizrrc';
const transformProp = Modernizr.prefixed('transform');

const styles = {
  container: {
    // width: '80%',
    width: '210px',
    // height: '49.44%',
    height: '140px',
    position: 'relative',
    margin: '0 auto 40px',
    border: '1px solid #CCC',
    WebkitPerspective: '1100px',
       MozPerspective: '1100px',
          perspective: '1100px',
  },

  carousel: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    WebkitTransformStyle: 'preserve-3d',
       MozTransformStyle: 'preserve-3d',
          transformStyle: 'preserve-3d',
    WebkitTransitionStyle: '-webkit-transform 1s',
       MozTransitionStyle: '-moz-transform 1s',
          transitionStyle: 'transform 1s',
    WebkitTransition: 'all .3s ease-in-out',
       MozTransition: 'all .3s ease-in-out',
          transition: 'all .3s ease-in-out'
  },

  panel: {
    display: 'block',
    position: 'absolute',
    width: '186px',
    height: '116px',
    top: '10px',
    left: '10px',
    border: '2px solid black',
    lineHeight: '116px',
    textAlign: 'center',
  },

  button: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '5px solid black',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }
};


const CarouselPanel = ({ children }) => (
  <div className="carousel-panel" style={styles.panel}>
    { children }
  </div>
);


class Carousel extends Component {
  constructor (props) {
    super(props);

    this.state = {
      theta: 0,
      radius: 0,
      rotation: 0,
      rotateFn: 'rotateY',
      panelSize: 0,
      totalPanelCount: props.children.length,

      isHorizontal: true
    };

    this.modify = this.modify.bind(this);
    this.navigate = this.navigate.bind(this);
    this.transform = this.transform.bind(this);
    this.getElement = this.getElement.bind(this);
  }


  componentDidMount() {
    this.modify();
    //......
  }


  // *TODO - change state with setState
  // this func creates the carousel
  // could also be used for UI to change/update the orientation/panel-count
  modify() {
    let panel, angle, i;

    this.setState((prevState, props) => {

      let { panelCount} = props;
      let { rotation, isHorizontal } = prevState;

      let theta = 360 / panelCount,
          rotateFn = isHorizontal ? 'rotateY' : 'rotateX',
          panelSize = this.element[ isHorizontal ? 'offsetWidth' : 'offsetHeight' ];

      // do some trig to figure out how big the carousel is in 3D space
      let radius = Math.round(( panelSize / 2) / Math.tan( Math.PI / panelCount ));

      // adjust rotation so panels are always flat
      let newRotation = Math.round( rotation / theta ) * theta;

      // adjust panels
      for ( i = 0; i < panelCount; i++ ) {
        panel = this.element.children[i];
        angle = theta * i;
        panel.style.opacity = 1;
        panel.style.backgroundColor = 'hsla(' + angle + ', 100%, 50%, 0.8)';

        // rotate panel, then push it out in 3D space
        panel.style[ transformProp ] = rotateFn + '(' + angle + 'deg) translateZ(' + radius + 'px)';
      }

      // hide other panels
      // for ( i = 0; i < this.state.totalPanelCount - 1; i++ ) {
      //   panel = this.element.children[i];
      //   panel.style.opacity = 0;
      //   panel.style[ transformProp ] = 'none';
      // }


      return { theta, radius, rotateFn, panelSize, rotation: newRotation };
    });

    this.transform();
  }


  // *TODO - do this with React-Motion
  transform() {
    let { radius, rotateFn, rotation } = this.state;
    // push the carousel back in 3D space and rotate it
    this.element.style[ transformProp ] = 'translateZ(-' + radius + 'px) ' + rotateFn + '(' + rotation + 'deg)';
  }


  navigate(dir) {
    this.setState((prevState) => (
      { rotation: prevState.rotation + prevState.theta * dir }
    ));
    this.modify();
  }


  // create a refrence to the carousel node on the Carousel instance
  getElement( element ) {
    this.element = element;
  }


  render() {

    const panels = [];

    for (let i = 0; i < this.props.panelCount; i++) {
      panels.push(<CarouselPanel key={`carPan${i}`}>{ 'TempFiller' }</CarouselPanel>);
    }

    return (
      <div className="carouselContainer" style={styles.container}>
        <div
          className="carouselButtonLeft"
          style={{...styles.button, left: '-6%'}}
          onClick={() => this.navigate(1)}
        />

        <div className="carousel" style={styles.carousel} ref={this.getElement}>
          { panels }
        </div>

        <div
          className="carouselButtonRight"
          style={{...styles.button, left: '106%'}}
          onClick={() => this.navigate(-1)}
        />
      </div>
    );
  }
}

export default Carousel;
