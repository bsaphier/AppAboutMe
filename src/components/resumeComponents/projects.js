import React from 'react';

import { carousel3D } from '../HOC';
import SectionFoot from '../SectionFoot';
import ProjectPanel from '../ProjectPanel';
import ProjectModal from '../ProjectModal';
import ProjectsSidebar from '../ProjectsSidebar';
import { Section, FillSection } from '../displayComponents';


const Projects = ({ style, content }) => {

  const panels = content.map( (project) =>
    <ProjectPanel
      key={`project-panel-${project.index}`}
      style={style}
      project={project}
      backgroundImg={project.backgroundImg}
    />
  );

  const Carousel3D = carousel3D(panels);


  return (
    <Section id="projects">

      <ProjectsSidebar style={style} content={content} />

      <FillSection style={{ padding: 0 }}>

        <ProjectModal />

        <Carousel3D />

        <SectionFoot to="skills" text="NEXT" />

      </FillSection>

    </Section>
  );
};


export default Projects;
