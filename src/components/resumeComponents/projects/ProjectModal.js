import React from 'react';
import { connect } from 'react-redux';

import colors from '../../../bin/colors';
import Modernizr from '../../../../.modernizrrc';
import { buttons, Cell } from '../../displayComponents';
import { toggleProjectModal } from '../../../actions';
const  { Button } = buttons;


const transform = Modernizr.prefixed('transform');

const styles = {
  modalBack: {
    position: 'absolute',
    zIndex: 10,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    background: 'rgba(45, 45, 45, 0.75)'
  },
  modal: {
    position: 'relative',
    zIndex: 9,
    top: '38%',
    left: '50%',
    width: '50%',
    color: colors.CHINESE_VIOLET,
    [ transform ]: 'translate(-50%, -50%)',
  },
  modalContent: {
    position: 'relative',
    zIndex: 9,
    padding: '1rem 2rem',
    minHeight: '33.3vh',
    background: '#FFF',

    display: 'flex',
    alignContent: 'space-between',
    WebkitFlexWrap: 'wrap',
    MSFlexWrap: 'wrap',
    flexWrap: 'wrap',
  },
  modalHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '16%',
    width: '100%',
    padding: '0.5rem 2rem',

    fontStyle: 'italic',
    color: colors.MENU_DARKER,
    background: colors.AMETHYST,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalTitle: {
    fontWeight: 600,
    fontSize: '1.5rem',
    alignSelf: 'center'
  },
  modalList: {
    margin: '40px 0',
    fontWeight: 400,
    listStyleType: 'none',
  },
  buttonsContainer: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  linkButtonWrap: {
    margin: '0 10px',
    WebkitFlexGrow: 1,
    flexGrow: 1
  },
  linkButton: {
    width: '10rem',
    color: '#FFF',
    background: colors.AMETHYST
  },

  // 3D shadow effect
  before: {
    zIndex: 1,
    position: 'absolute',
    left: '5px',
    bottom: '13px',
    width: '50%',
    height: '15%',
    maxHeight: '20px',

    WebkitBoxShadow: '0 13px 10px rgba(0, 0, 0, 0.38)',
    MozBoxShadow: '0 13px 10px rgba(0, 0, 0, 0.38)',
    boxShadow: '0 13px 10px rgba(0, 0, 0, 0.38)',
    [ transform ]: 'rotate(-3deg)',
  },
  after: {
    right: '5px',
    left: null,
    [ transform ]: 'rotate(3deg)',
  }
};


const ProjectModal = ({ currPanel, projects, toggleModal, projectModalOpen }) => {
  let { link, title } = projects[currPanel];

  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) toggleModal();
  };

  return projectModalOpen && (
    <div
      className="modal"
      style={styles.modalBack}
      onClick={handleBackgroundClick}
      >
      <div style={styles.modal}>
        <div style={styles.before} />

        <Cell style={styles.modalContent}>

          <div style={styles.modalHeader}>
            <h2 style={{ ...styles.modalTitle, textTransform: 'uppercase' }}>
              {projects[currPanel].title}
            </h2>
            <div style={{...styles.modalTitle, flexGrow: 0.9, fontSize: '1rem'}}>
              {` - ${projects[currPanel].date}`}
            </div>
          </div>

          <ul style={styles.modalList}>
            {
              projects[currPanel].description.map((bullet, idx) => (
                <li key={`projMod-${projects[currPanel].title}-${+idx}`}>
                  {bullet}
                </li>
              ))
            }
          </ul>

          <div style={styles.buttonsContainer}>
            <div style={styles.linkButtonWrap}>
              <Button link={link} style={styles.linkButton} title={`Link To ${title}`}>
                {'Check it out!'}
              </Button>
            </div>
            <div style={styles.linkButtonWrap}>
              <Button onClick={toggleModal} style={styles.linkButton}>
                {'Close'}
              </Button>
            </div>
          </div>

        </Cell>

        <div style={{...styles.before, ...styles.after}} />
      </div>
    </div>
  );
};


const mapStateToProps = ({
  carousel: { currPanel },
  app: { projectModalOpen },
  resume: { resume: { projects } }
}) => ({ currPanel, projects, projectModalOpen });


const mapDispatchToProps = dispatch => ({ toggleModal: () => dispatch(toggleProjectModal()) });


export default connect( mapStateToProps, mapDispatchToProps)(ProjectModal);
