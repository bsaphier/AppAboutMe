import React from 'react';

import Title from '../Title';
import Section from '../Section';
import FillView from '../FillView';
import SideSection from '../SideSection';
import SectionFoot from '../SectionFoot';

const Projects = ({ style }) => {
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

      <FillView>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <SectionFoot to="skills" text="NEXT" />
      </FillView>

    </Section>
  );
};

export default Projects;
