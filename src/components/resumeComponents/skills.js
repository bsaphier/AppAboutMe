import React from 'react';

import Cell from '../Cell';
import Title from '../Title';
import Section from '../Section';
import ChangeSection from '../ChangeSection';

const Skills = ({ styling, content }) => {
  return (
    <Section id="skills">
      <Title className="shadow" style={styling.title}>
        MY SKILLS
      </Title>
      <Cell>
        {content.proficient.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </Cell>
      <ChangeSection to="" text="TO THE TOP" />
    </Section>
  );
};

export default Skills;
