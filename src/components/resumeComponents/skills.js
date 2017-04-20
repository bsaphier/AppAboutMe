import React from 'react';

import colors from '../../bin/colors';
import { Cell, Title, Section, SectionFoot, FillSection } from '../displayComponents';


const styles = {
  text: {
    cursor: 'default',
    fontWeight: 900,
    fontSize: '1.6rem',
    color: colors.MENU_DARK,
    letterSpacing: '-0.02rem',

    textShadow: `1px -1px 0 ${colors.OPERA_MAUVE}`
  },
  title: {
    fontWeight: 100,
    fontSize: '4rem',
  },
  itemWrapper: {
    padding: '0.5rem 1rem',
    display: 'inline-block',
    margin: '1.6rem',
    border: `solid ${colors.AMETHYST}`
  },
  item: {
  }
};


const Skills = ({ content: { proficient } }) => {
  return (
    <Section id="skills">
      <FillSection>

        <Title style={styles.title}>{`STUFF I'M GOOD AT`}</Title>

        <Cell style={{ width: '100%', overflow: 'visible' }}>
          { proficient.map((skill, idx) => {
            let itemWrapStyle = {
              ...styles.itemWrapper
            };

            return (
              <div key={skill} style={itemWrapStyle}>
                <div style={styles.text}>{skill}</div>
              </div>
            );
          })}
        </Cell>

        <SectionFoot to="" text="TO THE TOP" />

      </FillSection>
    </Section>
  );
};


export default Skills;
