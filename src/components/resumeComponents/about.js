import React from 'react';

import Section from '../Section';
import SectionItem from '../SectionItem';
import ChangeSection from '../ChangeSection';

const About = ({ content, styling }) => {
  return (
    <Section id="about" style={styling.section}>
      <h1 className="shadow" style={styling.title}>ABOUT</h1>
      <SectionItem>
        <p>{content}</p>
      </SectionItem>
      <ChangeSection to="skills" text="NEXT" />
    </Section>
  );
};

export default About;
