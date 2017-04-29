import { connect } from 'react-redux';
import React, { Component } from 'react';

import Modernizr from '../../../../.modernizrrc';
import { buttons, Cell, Title, FillSection } from '../../displayComponents';
import { hypote, normal as _normal } from '../../../bin/utils';
//:TODO do I really want to load the images this way??
// i.e. with webpack and part of the bundle
import imgs from '../../../bin/images';
const  { Button } = buttons;


const transform = Modernizr.prefixed('transform');

const styles = {
  parallaxWrapA: {
    // position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(45, 45, 45)',
  },
  parallaxWrapB: {
    // position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(255, 255, 255)',

    WebkitPerspectiveOrigin: '50% 50%',
    MozPerspectiveOrigin: '50% 50%',
    OPerspectiveOrigin: '50% 50%',
    perspectiveOrigin: '50% 50%',
  },
  parallaxDiv: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },

  backgroundFlat: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'auto 100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  backgroundBlur: {
    //:TODO boolean will include these styles
  },
  background: {
    // position: 'relative',
    // zIndex: -1,
    width: '100%',
    height: '100%',
  },

  banner: {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '33.33%',
    backgroundColor: 'rgba(0, 0, 0, 0.62)',

    WebkitTransform: '-webkit-translate(-50%, -50%)',
    MozTransform: '-moz-translate(-50%, -50%)',
    OTransform: '-o-translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  bannerInfo: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

  titleMain: {
    display: 'block',
    position: 'relative',
    textAlign: 'inherit'
  },
  title: {
    marginLeft: 0,
    fontWeight: 100,
    fontSize: '4rem',
  },
  buttonWrap: {
    width: '13rem',
    margin: 'auto'
  }
};


class ProjectPanel extends Component {

  constructor( props ) {
    super(props);
    let { project: { backgroundImg }} = props;

    this.state = {
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
    this.getBackgroundLayer = this.getBackgroundLayer.bind(this);
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
  getBackgroundLayer( layer, fileName ) {
    let { mouseX, mouseY, parallaxVar, panelWidth, panelHeight } = this.state;

    // the maxDistance is the distance from the center to the corner of the panel
    let maxDistance = hypote(panelWidth, panelHeight);

    // the distance of the mouse, from the center of the panel, as a cartesian coordinate
    let distance = hypote(mouseX, mouseY);

    // vary the style for different panels
    let translateX = (parallaxVar) ? -50 : 0;
    let translateY = (parallaxVar) ? -50 : 0;

    let perspective = panelWidth < panelHeight
      ? (panelHeight * 100 / panelWidth)
      : (panelWidth  * 100 / panelHeight);
    // let translateZ = (distance / maxDistance) * (layer * -40);
    let translateZ = (parallaxVar)
      ? (distance / maxDistance) * (layer * -40)
      : 2 * distance / maxDistance * Math.sqrt(perspective * layer);

    let rotateY = (parallaxVar)
      ? (mouseX) * (layer * 0.5 / panelWidth)
      : (mouseX * -1) / panelWidth * layer;
    let rotateX = (parallaxVar)
      ? mouseY * (layer * 0.5 / panelHeight)
      : mouseY / (panelHeight * layer);
    let imgStyle = (parallaxVar)
      ? {
          position: 'absolute',
          width: `425%`,
          left: '50%',
          top: '55%'
        }
      : { height: `${panelHeight * 1.5}px` };

    return (
      <img
        src={imgs[fileName]}
        alt={fileName}
        style={{
          ...imgStyle,
          [transform]: `
            translateY(${translateY}%)
            translateX(${translateX}%)
            translateZ(${translateZ}px)
            rotateY(${rotateY}deg)
            rotateX(${rotateX}deg)
          `
        }}
      />
    );
  }


  createBackground() {
    let { project: { backgroundImg } } = this.props;
    let { parallax, parallaxVar, panelWidth, panelHeight } = this.state;
    let perspective = panelWidth < panelHeight
      ? (panelHeight * 100 / panelWidth)
      : (panelWidth  * 100 / panelHeight);


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
      ? (
        <div className="parallax-mouse" style={backgroundStyle}>

          { backgroundImg.map( (fileName, i) => {

            let layer = i + 1;

            return (
              <div key={`bg-layer-${+i}-${fileName}`} style={styles.parallaxDiv}>
                { this.getBackgroundLayer(layer, fileName) }
              </div>
            );
          })}

        </div>
        )

      : (<div style={backgroundStyle} />);
  }


  render() {
    let { toggleModal, project: { link, title, shortDescription } } = this.props;

    return (
      <FillSection className="project-panel" style={{padding: 0}}>


        <div className="background" ref={this.getElement} style={styles.background}>
          { this.createBackground() }
        </div>

        <Cell style={styles.banner}>
          <div style={styles.bannerInfo}>

            <Title style={styles.title} parentStyle={styles.titleMain}>
              <span>{ title }</span>
            </Title>

            <div style={{color: 'rgb(161, 136, 166)'}}>{ shortDescription }</div>

            <div style={styles.buttonWrap}>
              <div style={{padding: '5px'}}>
                <Button link={link} title={`Link To ${title}`}>
                  {'Check it out!'}
                </Button>
              </div>

              <div style={{padding: '5px'}}>
                <Button title="More Info" onClick={toggleModal}>
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
