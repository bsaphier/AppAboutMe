import React from 'react';

import Title from '../Title';
import Section from '../Section';
import ChangeSection from '../ChangeSection';

const Skills = ({ styling, content }) => {
  return (
    <Section id="skills">
      <Title className="shadow" style={styling.title}>MY SKILLS</Title>
      <div style={styling.cell}>
        {content.proficient.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
        <ChangeSection to="" text="TO THE TOP" />
    </Section>
  );
};

export default Skills;
