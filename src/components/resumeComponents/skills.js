import React from 'react';

import {
  Cell,
  Title,
  Section,
  FillView
} from '../displayComponents';
import SectionFoot from '../SectionFoot';

const Skills = ({ style, content }) => {
  return (
    <Section id="skills">
      <FillView>
        {/* <Title className="shadow" style={style.title}>
          MY SKILLS
        </Title> */}
        <Cell>
          {content.proficient.map((skill) => (<div key={skill}>{skill}</div>))}
        </Cell>
        <SectionFoot to="" text="TO THE TOP" />
      </FillView>

    </Section>
  );
};

export default Skills;
