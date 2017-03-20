import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';

import carouselPanel from './carouselPanel';
import { createCarousel, rotateCarousel, resizeCarousel } from '../../actions';

import Modernizr from '../../../.modernizrrc';
const transform = Modernizr.prefixed('transform');


const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    margin: '0 auto',
    WebkitPerspective: '100vmin',
    MozPerspective: '100vmin',
    perspective: '100vmin',
  },

  carousel: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    WebkitTransformStyle: 'preserve-3d',
    WebkitTransitionStyle: '-webkit-transform 1s',
    MozTransformStyle: 'preserve-3d',
    MozTransitionStyle: '-moz-transform 1s',
    transformStyle: 'preserve-3d',
    transitionStyle: 'transform 1s',
  },

  //:TODO fix or replace this
  button: {
    zIndex: 9,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '5px solid black',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '-0.2em 0.2em 1.5em -0.382em rgba(81, 81, 81, 0.9)'
  }
};

// the panels arg passed in here must be an array of valid React components
const carousel3D = (panels) => {

  class Carousel3D extends Component {

    constructor(props) {
      super(props);
      this.getSize = this.getSize.bind(this);
      this.getElement = this.getElement.bind(this);
    }


    componentDidMount() {
      let { init, axis, resize } = this.props;

      init(panels.length, this.getSize(axis));

      window.addEventListener( 'resize', () => resize(panels.length, this.getSize(axis)));
    }


    componentWillUnmount() {
      let { axis, resize } = this.props;

      window.removeEventListener( 'resize', () => resize(panels.length, this.getSize(axis)));
    }


    // get the size of the carousel DOM node
    getSize( axis ) {
      return this.domNode[axis === 'Y' ? 'offsetWidth' : 'offsetHeight'];
    }


    // create a refrence on the Carousel instance to the
    getElement( ref ) {
      this.domNode = ref;
    }


    render() {
      const { axis, theta, rotate, radius, rotation } = this.props;

      return (
        <div className="carousel-container" style={styles.container}>
          <div onClick={() => rotate(1)} style={{...styles.button, left: '5%'}} />

          <Motion style={{ degree: spring(rotation, presets.wobbly) }}>
            {({ degree }) => (
              <div
                className="carousel"
                ref={this.getElement}
                style={{
                  ...styles.carousel,
                  [ transform ]: `rotate${axis}(${degree}deg)`
                }}>
                {
                  panels.map( (Panel, idx) =>
                    carouselPanel({ idx, axis, theta, radius, transform })(Panel) )
                }
              </div>
            )}
          </Motion>

          <div onClick={() => rotate(-1)} style={{...styles.button, left: '95%'}} />
        </div>
      );
    }
  }

  const mapStateToProps = ({ carousel: { axis, theta, ready, radius, rotation, panelSize, currPanel }}) => ({
    axis,
    theta,
    ready,
    radius,
    rotation,
    panelSize,
    currPanel
  });

  const mapDispatchToProps = (dispatch) => ({
    rotate: (dir) => dispatch(rotateCarousel(dir)),
    init: (panelsCount, panelSize) => dispatch(createCarousel(panelsCount, panelSize)),
    resize: (panelsCount, panelSize) => dispatch(resizeCarousel(panelsCount, panelSize)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Carousel3D);
};


export default carousel3D;
