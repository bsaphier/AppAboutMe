import React from 'react';

import SectionItem from '../SectionItem';
import ChangeSection from '../ChangeSection';

const About = ({ content, styling }) => {
  return (
    <section id="about" style={styling.section}>
      <h1 className="shadow" style={styling.title}>ABOUT</h1>
      <SectionItem>
        <p>{content}</p>
      </SectionItem>
      <ChangeSection to="skills" text="NEXT" />
    </section>
  );
};

export default About;
