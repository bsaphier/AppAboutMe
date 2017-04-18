import React from 'react';

import SectionFoot from '../SectionFoot';
import ProjectPanel from '../ProjectPanel';
import ProjectModal from '../ProjectModal';
import ProjectsSidebar from '../ProjectsSidebar';
import { Section, FillSection } from '../displayComponents';
import { toggleProjectModal } from '../../actions';
import { carousel3D } from '../HOC';


const Projects = ({ style, content, dispatch, ...props }) => {

  const toggleModal = () => dispatch(toggleProjectModal());

  const panels = content.map( (project) => (
    <ProjectPanel
      key={`project-panel-${project.index}`}
      style={style}
      project={project}
      toggleModal={toggleModal}
    />
  ));

  const Carousel3D = carousel3D(panels);


  return (
    <Section id="projects">

      <ProjectsSidebar style={style} content={content} />

      <FillSection style={{ padding: 0 }}>

        <ProjectModal />

        {/* <NavBack /> */}
        <Carousel3D />
        {/* <NavFwd /> */}

        <SectionFoot to="skills" text="NEXT" />

      </FillSection>

    </Section>
  );
};


export default Projects;
