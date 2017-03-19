import React from 'react';

import {
  Title,
  Section,
  Carousel3D,
  FillSection,
  SideSection
} from '../displayComponents';
import SectionFoot from '../SectionFoot';

const Projects = ({ style, content }) => {

  const panels = content.map( (project, idx) =>
    <div key={`tempPanel${+idx}`}>{project.title}</div>);

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


      <FillSection style={{boxShadow: 'inset -1.3em 0em 1.3em -1em rgba(81, 81, 81, 0.3)'}}>

        <Carousel3D>
          { panels }
        </Carousel3D>

        <SectionFoot to="skills" text="NEXT" />

      </FillSection>

    </Section>
  );
};

export default Projects;
