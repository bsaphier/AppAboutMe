import React from 'react';
import { connect } from 'react-redux';

import { toggleProjectModal } from '../actions';
import { Button, BorderGrad } from './displayComponents';


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
    background: 'rgba(45, 45, 45, 0.3)'
  },
  modalTitle: {
    display: 'inline-block',
    fontWeight: 400,
  },
  buttonContainer: {
    position: 'absolute',
    top: '0.5em',
    right: '2em',
  },
  button: {
    margin: 0,
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    MsBackgroundClip: 'text',
    OBackgroundClip: 'text',

    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    MsTextFillColor: 'transparent',
    OTextFillColor: 'transparent',
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
      <BorderGrad style={styles.modal}>

        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>
            {projects[currPanel].title}
          </h2>
          <div style={{display: 'inline', fontStyle: 'italic'}}>
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
