import React from 'react';

import {
  Title,
  Section,
  FillSection,
  SideSection
} from '../displayComponents';
import { carousel3D } from '../HOC';
import SectionFoot from '../SectionFoot';
import ProjectPanel from '../ProjectPanel';
import ProjectModal from '../ProjectModal';


const Projects = ({ style, content }) => {

  const panels = content.map( (project) =>
    <ProjectPanel
      key={project.title}
      backgroundImg={''}
      project={project}
      style={style}
    />
  );

  const Carousel3D = carousel3D(panels);

  return (
    <Section id="projects">

      <SideSection title="Projects">
        <Title style={{
          ...style.title,
          fontSize: '6vh',
          letterSpacing: '-0.05em'
        }}>
          <span>Projects</span>
        </Title>
      </SideSection>


      <FillSection style={{ padding: 0 }}>

        <ProjectModal />

        <Carousel3D />

        <SectionFoot to="skills" text="NEXT" />

      </FillSection>

    </Section>
  );
};

export default Projects;
