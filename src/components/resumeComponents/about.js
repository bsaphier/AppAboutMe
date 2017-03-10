import React from 'react';

import Cell from '../Cell';
import Title from '../Title';
import Sidebar from '../Sidebar';
import Section from '../Section';
import SectionItem from '../SectionItem';
import ChangeSection from '../ChangeSection';

const About = ({ content, styling }) => {
  return (
    <Section id="about">
      <Sidebar title="Contact" />
      <div style={styling.banner}>
        <Cell style={{position: 'absolute'}}>
          <Title className="shadow" style={styling.title}>
            ABOUT
          </Title>
          <SectionItem>
            <p>{content}</p>
          </SectionItem>
        </Cell>
      </div>
      <ChangeSection to="projects" text="NEXT" sidebar />
    </Section>
  );
};

export default About;
