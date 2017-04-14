import React from 'react';

import { buttons, Cell, Title, FillSection } from './displayComponents';
const { Button } = buttons;

const styles = {
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'auto 100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
    // backgroundColor: 'rgba(127, 255, 212, 0.95)'
  },
  backgroundBlur: {
    //:TODO boolean will include these styles
  },
  parallaxDiv: {
    //:TODO parallax styles . . .
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

// create the background elements based on the project.backgroundImg Prop
const getBackground = (bgImg) => {
  let backgroundStyle;

  if (Array.isArray(bgImg)) {
    // create the parallax effect with layers
    let backgroundLayers = bgImg.map( (fileName, i) => (
      <div
        key={`bg-layer-${+i}-${fileName}`}
        style={{...styles.background, backgroundColor: 'transparent', backgroundImage: `url(public/images/${fileName})`}}
      />
    ));
    backgroundLayers.unshift( <div style={{...styles.background, backgroundColor: 'rgb(81, 81, 81)'}} /> );

    return (<div className="parallax-mouse">{ backgroundLayers }</div>);
  } else {

    backgroundStyle = (bgImg.length)
      ? {...styles.background, backgroundImage: `url(public/images/${bgImg})`}
      : styles.background;

    return (<div style={backgroundStyle} />);
  }
};


const ProjectPanel = ({
  style,
  toggleModal,
  project: { link, title, backgroundImg, shortDescription }
}) => {

  return (
    <FillSection className="project-panel" style={{padding: 0}}>

      { getBackground(backgroundImg) }

      <Cell>
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
};


export default ProjectPanel;
