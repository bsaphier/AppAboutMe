import { connect } from 'react-redux';
import React, { Component } from 'react';

import colors from '../../../bin/colors';
import Modernizr from '../../../../.modernizrrc';
import { buttons, Cell, Title, FillSection } from '../../displayComponents';
import { int, hypote, normal as _normal } from '../../../bin/utils';
//:TODO do I really want to load the images from here??
import imgs from '../../../bin/images';
const  { Button } = buttons;


const transform = Modernizr.prefixed('transform');

//:TODO do this with a helper func for modular color/blur/etc...
// text shadow for pseudo-element
let rgb = 46, textShadow = [];

for (let a = 2, b = 3, c; a <= 13; c = a, a = b, b += c) {
  textShadow.push(`${a}px ${a}px ${a}px rgb(${rgb},${rgb},${rgb})`);
  rgb += 7;
}

textShadow.join(', ');


const styles = {
  background: {
    position: 'absolute',
    zIndex: 4,
    width: '100%',
    height: '100%',

    WebkitTransformStyle: 'preserve-3d',
    MozTransformStyle: 'preserve-3d',
    OTransformStyle: 'preserve-3d',
    transformStyle: 'preserve-3d',

    WebkitTransition: 'all ease-out .8s',
    MozTransition: 'all ease-out .8s',
    OTransition: 'all ease-out .8s',
    transition: 'all ease-out .8s',
  },

  backgroundFlat: {
    position: 'relative',
    zIndex: 9,
    width: '100%',
    height: '100%',
    backgroundSize: 'auto 100%',
    backgroundColor: colors.MENU_DARKER,
  },
  parallaxWrapA: {
    position: 'relative',
    zIndex: 9,
    width: '100%',
    height: '100%',
    backgroundColor: colors.MENU_DARKER,
  },
  parallaxWrapB: {
    position: 'relative',
    zIndex: 9,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',

    WebkitPerspectiveOrigin: '50% 50%',
    MozPerspectiveOrigin: '50% 50%',
    OPerspectiveOrigin: '50% 50%',
    perspectiveOrigin: '50% 50%',
  },

  parallaxDiv: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },

  backgroundBlur: {
    //:TODO boolean will include these styles
  },

  banner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    zIndex: 7,
    textAlign: 'center',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '33.33%',
    backgroundColor: 'rgba(81, 81, 81, 0.62)',

    [ transform ]: 'translate(-50%, -50%)',
  },

  title: {
    padding: '0 5px',
    margin: 'auto',
    fontWeight: 600,
    fontStyle: 'italic',
    fontSize: '3rem',
    letterSpacing: '-0.1rem',

    textShadow: `-3px -2px ${colors.AMETHYST}`,
    backgroundImage: `linear-gradient(to top right, ${colors.MENU_DARKER} 62%, ${colors.OPERA_MAUVE} 162%)`
  },
  projectDescription: {
    margin: '0 5rem',
    fontSize: '1.38rem',
    fontWeight: 900,
    color: colors.OPERA_MAUVE,
    textShadow
  },
  buttonWrap: {
    width: '13rem',
    margin: 'auto'
  }
};


class ProjectPanel extends Component {

  constructor( props ) {
    super(props);
    let { currPanel, project: { backgroundImg }} = props;

    this.state = {
      currPanel,
      mouseX: 0,
      mouseY: 0,
      panelWidth: 0,
      panelHeight: 0,
      parallax: Array.isArray(backgroundImg),
      parallaxVar: Array.isArray(backgroundImg) && (backgroundImg.length > 5)
    };

    this.getElement = this.getElement.bind(this);
    this.normMouseX = this.normMouseX.bind(this);
    this.normMouseY = this.normMouseY.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.createBackground = this.createBackground.bind(this);
  }


  componentDidMount() {
    window.addEventListener( 'resize', this.handleResize);

    if (this.state.parallax) {
      window.addEventListener( 'mousemove', this.handleMouseMove);
    }
  }


  componentWillUnmount() {
    window.removeEventListener( 'resize', this.handleResize);

    if (this.state.parallax) {
      window.removeEventListener( 'mousemove', this.handleMouseMove);
    }
  }


  normMouseX( value ) {
    let { panelWidth } = this.state;
    let norm = _normal(panelWidth, 0, (panelWidth / 2), (-1 * (panelWidth / 2)));
    return norm(value);
  }


  normMouseY( value ) {
    let { panelHeight } = this.state;
    let norm = _normal(panelHeight, 0, (panelHeight / 2), (-1 * (panelHeight / 2)));
    return norm(value);
  }


  handleMouseMove( event ) {
    let { clientX, clientY } = event;
    // maps mouse pos relative to the center of the panelcoordinates of the mouse, relative to
    // the size of the panel
    let mouseX = this.normMouseX(clientX);
    let mouseY = this.normMouseY(clientY);

    this.setState({ mouseX, mouseY });
  }


  handleResize() {
    let { offsetWidth, offsetHeight } = this.domNode;
    this.setState({
      panelWidth: offsetWidth,
      panelHeight: offsetHeight
    });
  }


  // create a refrence to a DOM node to listen for mouseMove
  getElement( ref ) {
    this.domNode = ref;
    this.setState({
      panelWidth: ref.offsetWidth,
      panelHeight: ref.offsetHeight
    });
  }


  //:TODO don't return the entire element instead just modify the style. as it is, the entire
  // element update on mouse movement
  createBackground() {
    let { project: { backgroundImg } } = this.props;
    let { mouseX, mouseY, parallax, parallaxVar, panelWidth, panelHeight } = this.state;

    // the maxDistance is the distance from the center to the corner of the panel
    let maxDistance = hypote(panelWidth, panelHeight);

    // the distance of the mouse, from the center of the panel, as a cartesian coordinate
    let distance = hypote(mouseX, mouseY);

    let perspective = int(panelWidth  * 500 / panelHeight);

    const backgroundStyle = (parallax)
      ? {
          ...styles[ parallaxVar ? 'parallaxWrapB' : 'parallaxWrapA' ],
          WebkitPerspective: `${perspective}px`,
          MozPerspective: `${perspective}px`,
          OPerspective: `${perspective}px`,
          perspective: `${perspective}px`,
        }
      : {
          ...styles.backgroundFlat,
          backgroundImage: `url(${imgs[backgroundImg]})`
        };

    return (parallax)
      ? (<div className="parallax-mouse" style={backgroundStyle}>
          {
            backgroundImg.map( (fileName, i) => {
              const  layer = i + 1;

              const position = (parallaxVar) ? { left: -110 } : { left: 40 };

              const translateZ = (parallaxVar)
                ? (distance / maxDistance) * (layer * -40)
                : 2 * distance / maxDistance * Math.sqrt(perspective * layer);

              const rotateY = (mouseX * -1) / panelWidth * layer;

              const rotateX = mouseY / (panelHeight * layer);

              const parallaxDivStyle = {
                ...styles.parallaxDiv,
                ...position,
                zIndex: layer,
                [transform]: `
                  translateZ(${translateZ}px)
                  rotateY(${rotateY}deg)
                  rotateX(${rotateX}deg)`
              };

              return (
                <div key={`bg-layer-${+i}-${fileName}`} style={parallaxDivStyle}>
                  <img src={imgs[fileName]} alt={fileName} height={panelHeight * 1.1} />
                </div>
              );
            })
          }
        </div>)
      : (<div style={backgroundStyle} />);
  }


  render() {
    let { toggleModal, project: { title, shortDescription } } = this.props;

    return (
      <FillSection className="project-panel" style={{padding: 0}}>

        <div className="background" ref={this.getElement} style={styles.background}>
          { this.createBackground() }
        </div>

        <Cell style={styles.banner}>
          <div>

            <Title style={styles.title}>
              <span style={{ position: 'absolute', zIndex: -1, textShadow }}>{ title }</span>
              <span>{ title }</span>
            </Title>

            <div style={styles.projectDescription}>{ shortDescription }</div>

            <div style={styles.buttonWrap}>
              <div style={{padding: '10px 5px'}}>
                <Button title="More Info" onClick={toggleModal} style={{background: colors.AMETHYST}}>
                  {'More Info'}
                </Button>
              </div>
            </div>
          </div>
        </Cell>

      </FillSection>
    );
  }
}


const mapStateToProps = ({ carousel: { currPanel } }) => ({ currPanel });


export default connect(mapStateToProps)(ProjectPanel);
