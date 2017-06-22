import React from 'react';

import ProjectModal from './ProjectModal';
import SectionFoot from '../../SectionFoot';
import ProjectsSidebar from './ProjectsSidebar';
import { buttons, Section, FillSection } from '../../displayComponents';
import { carousel3D } from '../../HOC';


let Carousel3D, cachedCarouselPanels;


const { Button } = buttons;
const SECTION_NAME = 'projects';


const Projects = ({
  style,
  burger,
  content: { projects, carouselPanels },
  ...props
}) => {

  if (cachedCarouselPanels !== carouselPanels) {

    cachedCarouselPanels = carouselPanels;

    Carousel3D = carousel3D( cachedCarouselPanels );

  }

  const toggleBurger = () => {
    if (burger[SECTION_NAME]) { props.closeBurger(SECTION_NAME); }
    else                      { props.openBurger( SECTION_NAME); }
  };

  return (
    <Section id={SECTION_NAME}>

      <ProjectsSidebar
        style={style}
        burgerOpen={burger.projects}
        content={projects} />

      <FillSection style={{ padding: 0 }}>

      <Button
        className="burgerButton"
        onClick={toggleBurger}
        style={{
          zIndex: 9999,
          position: 'absolute',
          top: '5%',
          right: '5%'
        }}>{'III'}</Button>

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
