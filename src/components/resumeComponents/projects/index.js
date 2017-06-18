import React from 'react';

import ProjectModal from './ProjectModal';
import SectionFoot from '../../SectionFoot';
import ProjectsSidebar from './ProjectsSidebar';
import { buttons, Section, FillSection } from '../../displayComponents';
import { carousel3D } from '../../HOC';


let Carousel3D, cachedCarouselPanels;

const { Button } = buttons;


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

  let mql = (props.mql === 'MED') || (props.mql === 'SML');

  return (
    <Section id="projects">

      <ProjectsSidebar
        style={style}
        burgerOpen={burger.projects}
        content={projects} />

      <FillSection style={{ padding: 0 }}>

        {
          mql ? (
            <Button
              className="burgerButton"
              onClick={() => props.burgerToggle( burger.projects )}
              style={{
                zIndex: 9999,
                position: 'absolute',
                top: '5%',
                right: '5%'
              }}>{'III'}</Button>
          ) : null
        }

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
