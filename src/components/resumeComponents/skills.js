import React from 'react';

import Cell from '../Cell';
import Title from '../Title';
import Section from '../Section';
import SectionFoot from '../SectionFoot';

const Skills = ({ style, content }) => {
  return (
    <Section id="skills">
      {/* <Title className="shadow" style={style.title}>
        MY SKILLS
      </Title>
      <Cell>
        {content.proficient.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </Cell> */}
      <SectionFoot to="" text="TO THE TOP" />
    </Section>
  );
};

export default Skills;
