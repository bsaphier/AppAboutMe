import React from 'react';
import { connect } from 'react-redux';

import { toggleProjectModal } from '../actions';
import { Cell, Title, Button, FillSection } from './displayComponents';


const styles = {
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(127, 255, 212, 0.95)'
  },
  backgroundBlur: {
    // boolean will include these styles
  },
  banner: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '33.33%',
    background: 'rgba(45, 45, 45, 0.3)',

    WebkitTransform: '-webkit-translate(-50%, -50%)',
    MozTransform: '-moz-translate(-50%, -50%)',
    OTransform: '-o-translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  bannerInfo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',

    WebkitTransform: '-webkit-translate(-50%, -50%)',
    MozTransform: '-moz-translate(-50%, -50%)',
    OTransform: '-o-translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  titleMain: {
    display: 'block',
    textAlign: 'inherit'
  }
};


const ProjectPanel = ({
  style,
  toggleModal,
  backgroundImg,
  project: { link, title, shortDescription }
}) => {

  return (
    <FillSection className="project-panel" style={{padding: 0}}>

      <div style={{...styles.background, backgroundImage: backgroundImg}} />

      <Cell>
        <div style={styles.banner}>
          <div style={styles.bannerInfo}>

            <Title style={style.title} parentStyle={styles.titleMain}>
              <span>{ title }</span>
            </Title>

            <div>{ shortDescription }</div>

            <div style={{display: 'inline-block'}}>
              <Button link={link} title={`Link To ${title}`}>
                {'Check it out!'}
              </Button>

              <Button title="More Info" onClick={toggleModal}>
                {'More Info'}
              </Button>

              <Button>test</Button>
            </div>

          </div>
        </div>
      </Cell>

    </FillSection>
  );
};

export default connect(
  state => state,
  dispatch => ({ toggleModal: () => dispatch(toggleProjectModal()) })
)(ProjectPanel);
