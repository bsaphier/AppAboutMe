import React from 'react';
import { connect } from 'react-redux';
import { buttons, Cell } from '../../displayComponents';
import { toggleProjectModal } from '../../../actions';
import { styles } from '../../../styles';


const  { Button } = buttons;


const ProjectModal = ({ currPanel, projects, toggleModal, projectModalOpen }) => {
    let { link, title } = projects[currPanel];

    const handleBackgroundClick = event => {
        if (event.target === event.currentTarget) toggleModal();
    };

    return projectModalOpen && (
        <div
            className="modal"
            style={styles.resumeComponents.projects.modalBack}
            onClick={handleBackgroundClick} >
            <div style={styles.resumeComponents.projects.modal}>
                <div style={styles.resumeComponents.projects.before} />
                <Cell style={styles.resumeComponents.projects.modalContent}>
                    <div style={styles.resumeComponents.projects.modalHeader}>
                        <h2 style={{ ...styles.resumeComponents.projects.modalTitle, textTransform: 'uppercase' }}>
                            {projects[currPanel].title}
                        </h2>
                    </div>
                    <div style={styles.resumeComponents.projects.modalSubTitle}>
                        { projects[currPanel].date }
                    </div>
                    <ul style={styles.resumeComponents.projects.modalList}>
                        {projects[currPanel].description.map((bullet, idx) => (
                            <li key={`projMod-${projects[currPanel].title}-${+idx}`} style={{margin: '5px 0'}}>
                                {`– ${bullet}`}
                            </li>
                        ))}
                    </ul>
                    <div style={styles.resumeComponents.projects.buttonsContainer}>
                        <div style={styles.resumeComponents.projects.linkButtonWrap}>
                            <Button link={link} style={styles.resumeComponents.projects.linkButton} title={`Link To ${title}`}>
                                {'Check it out!'}
                            </Button>
                        </div>
                        <div style={styles.resumeComponents.projects.linkButtonWrap}>
                            <Button onClick={toggleModal} style={styles.resumeComponents.projects.linkButton}>
                                {'Close'}
                            </Button>
                        </div>
                    </div>
                </Cell>
                <div style={{...styles.resumeComponents.projects.before, ...styles.resumeComponents.projects.after}} />
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
