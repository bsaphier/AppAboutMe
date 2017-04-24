import React from 'react';
import { connect } from 'react-redux';

import { buttons, BorderGrad } from '../../displayComponents';
import { toggleProjectModal } from '../../../actions';
const  { Button } = buttons;

const styles = {
  modalBack: {
    position: 'absolute',
    zIndex: 999,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    background: 'rgba(81, 81, 81, 0.5)'
  },
  modal: {
    position: 'relative',
    top: '50%',
    left: '50%',
    width: '80%',

    WebkitTransform: '-webkit-translate(-50%, -50%)',
    MozTransform: '-moz-translate(-50%, -50%)',
    OTransform: '-o-translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  modalHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: '0.5em 2em',
    textTransform: 'capitalize',
    textShadow: 'rgba(255, 255, 255, 0.3) -1px 1px 8px',
    background: 'rgba(45, 45, 45, 0.3)'
  },
  modalTitle: {
    display: 'inline-block',
    fontWeight: 400,
  },
  modalHeaderText: {
    color: 'rgb(45, 45, 45)',
  },
  buttonContainer: {
    position: 'absolute',
    top: '0.5em',
    right: '2em'
  },
  button: {
    margin: 0,
    padding: '0.5em 0 0 1em',
    boxShadow: null,

    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    MsBackgroundClip: 'text',
    OBackgroundClip: 'text',

    WebkitTextFillColor: 'rgb(45, 45, 45)',
    MozTextFillColor: 'rgb(45, 45, 45)',
    MsTextFillColor: 'rgb(45, 45, 45)',
    OTextFillColor: 'rgb(45, 45, 45)',
  },

  // 3D shadow effect
  before: {
    zIndex: -1,
    position: 'absolute',
    left: '5px',
    bottom: '13px',
    width: '50%',
    height: '15%',
    maxHeight: '20px',

    WebkitBoxShadow: '0 13px 10px rgba(45, 45, 45, 0.7)',
    MozBoxShadow: '0 13px 10px rgba(45, 45, 45, 0.7)',
    boxShadow: '0 13px 10px rgba(45, 45, 45, 0.7)',

    WebkitTransform: 'rotate(-3deg)',
    MozTransform: 'rotate(-3deg)',
    OTransform: 'rotate(-3deg)',
    MsTransform: 'rotate(-3deg)',
    transform: 'rotate(-3deg)',
  },
  after: {
    right: '5px',
    left: null,

    WebkitTransform: 'rotate(3deg)',
    MozTransform: 'rotate(3deg)',
    OTransform: 'rotate(3deg)',
    MsTransform: 'rotate(3deg)',
    transform: 'rotate(3deg)',
  }
};


const ProjectModal = ({ currPanel, projects, toggleModal, projectModalOpen }) => {
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

        <BorderGrad style={{position: 'relative'}}>

          <div style={styles.modalHeader}>

            <h2 style={{...styles.modalTitle, ...styles.modalHeaderText}}>
              {projects[currPanel].title}
            </h2>
            <div style={{display: 'inline', fontStyle: 'italic', ...styles.modalHeaderText}}>
              {` - ${projects[currPanel].date}`}
            </div>

            <div style={styles.buttonContainer}>
              <Button onClick={toggleModal} style={styles.button}>
                {'Close'}
              </Button>
            </div>

          </div>

          <div style={{height: '2.5em'}} />

          <ul style={{listStylePosition: 'inside', fontWeight: 900}}>
            {projects[currPanel].description.map((bullet, idx) => (
              <li key={`projMod-${projects[currPanel].title}-${+idx}`}>
                {bullet}
              </li>
            ))}
          </ul>

        </BorderGrad>

        <div style={{...styles.before, ...styles.after}} />
      </div>
    </div>
  );
};


export default connect(
  ({
    carousel: { currPanel },
    app: { projectModalOpen },
    resume: { resume: { projects } },
  }) => ({ currPanel, projects, projectModalOpen }),
  dispatch => ({ toggleModal: () => dispatch(toggleProjectModal()) })
)(ProjectModal);
