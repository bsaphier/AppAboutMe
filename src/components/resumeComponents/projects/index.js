import React from 'react';

import ProjectModal from './ProjectModal';
import SectionFoot from '../../SectionFoot';
import ProjectsSidebar from './ProjectsSidebar';
import { Section, FillSection } from '../../displayComponents';
import { carousel3D } from '../../HOC';


const Projects = ({ style, content: { projects, carouselPanels } }) => {

  const Carousel3D = carousel3D(carouselPanels);

  return (
    <Section id="projects">

      <ProjectsSidebar style={style} content={projects} />

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
