import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';

import IconButton from '../IconButton';
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

    WebkitPerspectiveOrigin: '100% 50%',
    MozPerspectiveOrigin: '100% 50%',
    OPerspectiveOrigin: '100% 50%',
    perspectiveOrigin: '100% 50%',
    WebkitPerspective: '100vmin',
    MozPerspective: '100vmin',
    OPerspective: '100vmin',
    perspective: '100vmin',
  },

  carousel: {
    width: '100%',
    height: '100%',
    position: 'absolute',

    WebkitTransformStyle: 'preserve-3d',
    MozTransformStyle: 'preserve-3d',
    OTransformStyle: 'preserve-3d',
    transformStyle: 'preserve-3d',
    WebkitTransitionStyle: '-webkit-transform 0.6s',
    MozTransitionStyle: '-moz-transform 0.6s',
    OTransitionStyle: '-o-transform 0.6s',
    transitionStyle: 'transform 0.6s',
  },

  //:TODO fix or replace this
  button: {
    zIndex: 9,
    position: 'absolute',
    top: '50%',
    borderRadius: '50%',
    border: '2px solid rgb(255, 68, 62)',
  }
};


// the "panels" passed in here must be an array of valid React components
const carousel3D = (panels) => {

  class Carousel3D extends Component {

    constructor(props) {
      super(props);
      this.getSize = this.getSize.bind(this);
      this.getElement = this.getElement.bind(this);
      this.getPanelIndex = this.getPanelIndex.bind(this);
    }


    componentDidMount() {
      let { create, axis, resize } = this.props;

      create(panels, this.getSize(axis));

      window.addEventListener( 'resize', () => resize(panels.length, this.getSize(axis)));
    }


    componentWillUnmount() {
      let { axis, resize } = this.props;

      window.removeEventListener( 'resize', () => resize(panels.length, this.getSize(axis)));
    }


    // get the new panel's index
    getPanelIndex( dir ) {
      let nextPanel = (this.props.currPanel + dir) % panels.length;

      return nextPanel >= 0 ? nextPanel : panels.length - nextPanel * -1;
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
      let { axis, theta, rotate, radius, rotation } = this.props;


      return (
        <div className="carousel-container" style={styles.container}>

          <div
            style={{
              ...styles.button,
              left: '5%',
              [transform]: 'translate(-50%, -50%) rotate(90deg)',
              boxShadow: 'inset 0.2em 0.2em 1.5em -0.382em rgba(252, 255, 88, 0.9)'
            }}
            onClick={() => {
              let newRotation = rotation + theta;
              rotate(newRotation, this.getPanelIndex(-1));
            }}>
            <IconButton
              name="previous-panel"
              icon="angle-down"
              style={{color: 'rgb(255, 68, 62)', background: 'transparent'}}
            />
          </div>

          {/* //:TODO TransitionMotion? to animate forward and then back */}
          <Motion style={{ degree: spring(rotation, presets.wobbly) }}>
            {({ degree }) => (
              <div
                className="carousel"
                ref={this.getElement}
                style={{
                  ...styles.carousel,
                  [ transform ]: `translateZ(-${radius}px) rotate${axis}(${degree}deg)`
                }}>

                {
                  panels.map( (Panel, idx) =>
                    carouselPanel({ idx, axis, theta, radius, transform })(Panel) )
                }

              </div>
            )}
          </Motion>

          <div
            style={{
              ...styles.button,
              left: '95%',
              [transform]: 'translate(-50%, -50%) rotate(-90deg)',
              boxShadow: 'inset -0.2em -0.2em 1.5em -0.382em rgba(252, 255, 88, 0.9)'
            }}
            onClick={() => {
              let newRotation = rotation + theta * -1;
              rotate(newRotation, this.getPanelIndex(1));
            }}>
            <IconButton
              name="next-panel"
              icon="angle-down"
              style={{color: 'rgb(255, 68, 62)', background: 'transparent'}}
            />
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = ({
    carousel: { axis, theta, radius, rotation, panelSize, currPanel }
  }) => ({
    axis,
    theta,
    radius,
    rotation,
    panelSize,
    currPanel
  });

  const mapDispatchToProps = dispatch => ({
    rotate: (newRotation, currPanel) => dispatch(rotateCarousel(newRotation, currPanel)),
    resize: (panelsCount, panelSize) => dispatch(resizeCarousel(panelsCount, panelSize)),
    create: (projectPanels, panelSize) => dispatch(createCarousel(projectPanels, panelSize)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Carousel3D);
};


export default carousel3D;
