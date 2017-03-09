import React from 'react';

import Sidebar from '../Sidebar';
import Section from '../Section';
import SectionItem from '../SectionItem';
import ChangeSection from '../ChangeSection';

const About = ({ content, styling }) => {
  return (
    <Section id="about">
      <Sidebar title="Contact" />
      <h1 className="shadow" style={styling.title}>ABOUT</h1>
      <SectionItem>
        <p>{content}</p>
      </SectionItem>
      <ChangeSection to="projects" text="NEXT" sidebar />
    </Section>
  );
};

export default About;
