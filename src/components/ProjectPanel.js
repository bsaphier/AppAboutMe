import React, { Component } from 'react';

import Modernizr from '../../.modernizrrc';
import { buttons, Cell, Title, FillSection } from './displayComponents';
import { int } from '../bin/utils';
const { Button } = buttons;

const transform = Modernizr.prefixed('transform');

const styles = {
  parallaxWrap: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',

    WebkitPerspective: 'inherit',
    MozPerspective: 'inherit',
    OPerspective: 'inherit',
    perspective: 'inherit',
  },
  parallaxDiv: {
    //:TODO parallax styles . . .
    position: 'absolute',
    backgroundColor: 'transparent',

    WebkitTransformStyle: 'preserve-3d',
    MozTransformStyle: 'preserve-3d',
    OTransformStyle: 'preserve-3d',
    transformStyle: 'preserve-3d'
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'auto 100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // backgroundColor: 'rgba(127, 255, 212, 0.95)',

    // WebkitTransformStyle: 'preserve-3d',
    // MozTransformStyle: 'preserve-3d',
    // OTransformStyle: 'preserve-3d',
    // transformStyle: 'preserve-3d'
  },
  backgroundBlur: {
    //:TODO boolean will include these styles
  },

  banner: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '33.33%',
    backgroundImage: 'radial-gradient(circle at 50%, rgba(45, 45, 45, 0.55), rgba(45, 45, 45, 0.21))',

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
    display: 'inherit'
  },
  buttonWrap: {
    width: '13rem',
    margin: 'auto'
  }
};


class ProjectPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0
    };

    this.getElement = this.getElement.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }


  handleMouseMove( event ) {
    let { clientX, clientY } = event;
    let { offsetWidth, offsetHeight } = this.domNode;
    this.setState({
      mouseX: int(((clientX - (offsetWidth / 2)) / (offsetWidth / 2)) * 100),
      mouseY: int(((clientY - (offsetHeight / 2)) / (offsetHeight / 2)) * 100)
    });
  }


  // create a refrence to the DOM node to listen for mouseMove
  getElement( ref ) {
    this.domNode = ref;
  }


  render() {
    let {
      style,
      toggleModal,
      project: { link, title, backgroundImg, shortDescription }
    } = this.props;

    let { mouseX, mouseY } = this.state;

    let parallax = false;

    let backgroundStyle, backgroundLayers;


    if (Array.isArray(backgroundImg)) {
      // create the parallax effect with layers
      backgroundLayers = backgroundImg.map( (fileName, i) => (
        <div
          key={`bg-layer-${+i}-${fileName}`}
          style={styles.parallaxDiv}>
          <img
            src={`public/images/${fileName}`}
            alt={fileName}
            style={{
              [transform]: `translateZ(${int(backgroundImg.length + i)}px) rotateX(${mouseX * (i + 1)}deg) rotateY(${mouseY * (i + 1)}deg)`
            }}
          />
        </div>
      ));

      backgroundLayers.unshift(
        <div
          key={`bg-layer-00-base`}
          ref={this.getElement}
          style={{...styles.background, backgroundColor: 'rgb(81, 81, 81)'}}
        />
      );

      parallax = true;

    } else {
      backgroundStyle = (backgroundImg.length)
        ? {...styles.background, backgroundImage: `url(public/images/${backgroundImg})`}
        : styles.background;
    }

    return (
      <FillSection className="project-panel" style={{padding: 0}} onMouseMove={this.handleMouseMove}>

        { parallax
          ? (<div className="parallax-mouse" style={styles.parallaxWrap}>{backgroundLayers}</div>)
          : (<div style={backgroundStyle} />)
        }

        <Cell style={{position: null}}>
          <div style={styles.banner}>
            <div style={styles.bannerInfo}>

              <Title style={style.title} parentStyle={styles.titleMain}>
                <span>{ title }</span>
              </Title>

              <div>{ shortDescription }</div>

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
          </div>
        </Cell>
      </FillSection>
    );
  }
}


// const ProjectPanel = ({
//   style,
//   toggleModal,
//   project: { link, title, backgroundImg, shortDescription }
// }) => {
//   let xDiff = null;
//   let yDiff = null;
//   let domNode = null;
//
//
//   const getMousePos = (event) => {
//     let { clientX, clientY } = event;
//     let { offsetWidth, offsetHeight } = domNode;
//     xDiff = int(((clientX - (offsetWidth / 2)) / (offsetWidth / 2)) * 100);
//     yDiff = int(((clientY - (offsetHeight / 2)) / (offsetHeight / 2)) * 100);
//   };
//
//
//   // create the background elements based on the project.backgroundImg Prop
//   const getBackground = (bgImg) => {
//     // console.log(xDiff, yDiff, domNode.offsetWidth, `rotateX(${xDiff}deg)`);
//
//     if (Array.isArray(bgImg)) {
//       // create the parallax effect with layers
//       let backgroundLayers = bgImg.map( (fileName, i) => (
//         <div
//           key={`bg-layer-${+i}-${fileName}`}
//           style={{...styles.background, backgroundColor: 'transparent'}}>
//           <img
//             src={`public/images/${fileName}`}
//             alt={fileName}
//             style={{
//               [transform]: `translateZ(${int((bgImg.length / (i + 1)) * 10)}px)`
//             }}
//           />
//         </div>
//       ));
//       backgroundLayers.unshift(
//         <div
//           key={`bg-layer-00-base`}
//           ref={(ref) => { domNode = ref; }}
//           style={{...styles.background, backgroundColor: 'rgb(81, 81, 81)'}}
//         />
//       );
//
//       return (
//         <div className="parallax-mouse" style={styles.parallaxWrap}>
//           { backgroundLayers }
//         </div>
//       );
//     } else {
//       let backgroundStyle = (bgImg.length)
//         ? {...styles.background, backgroundImage: `url(public/images/${bgImg})`}
//         : styles.background;
//
//       return (<div style={backgroundStyle} />);
//     }
//   };
//
//
//   return (
//     <FillSection className="project-panel" style={{padding: 0}} onMouseMove={getMousePos}>
//
//       { getBackground(backgroundImg) }
//
//       <Cell>
//         <div style={styles.banner}>
//           <div style={styles.bannerInfo}>
//
//             <Title style={style.title} parentStyle={styles.titleMain}>
//               <span>{ title }</span>
//             </Title>
//
//             <div>{ shortDescription }</div>
//
//             <div style={styles.buttonWrap}>
//               <div style={{padding: '5px'}}>
//                 <Button link={link} title={`Link To ${title}`}>
//                   {'Check it out!'}
//                 </Button>
//               </div>
//
//               <div style={{padding: '5px'}}>
//                 <Button title="More Info" onClick={toggleModal}>
//                   {'More Info'}
//                 </Button>
//               </div>
//             </div>
//
//           </div>
//         </div>
//       </Cell>
//     </FillSection>
//   );
// };


export default ProjectPanel;
