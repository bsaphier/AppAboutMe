import React from 'react';

import colors from '../../bin/colors';
import { Cell, Title, Section, SectionFoot, FillSection } from '../displayComponents';


const styles = {
  title: {
    margin: 0,
    fontWeight: 900,
    fontSize: '5rem',
    letterSpacing: '-0.25rem',
  },
  text: {
    cursor: 'default',
    color: colors.OPERA_MAUVE,

    fontWeight: 400,
    fontSize: '1.6rem',

    textShadow: `
      1px 1px 0 ${colors.MENU_DARKER},
      1px 2px 0 ${colors.MENU_DARKER},
      1px 3px 0 ${colors.MENU_DARKER},
      1px 4px 0 ${colors.MENU_DARKER}`
  },
  itemWrapper: {
    padding: '0.5rem 1rem',
    display: 'inline-block',
    margin: '1.6rem',
    background: colors.MENU_DARK,
    border: `solid ${colors.AMETHYST}`
  },
  item: {
  }
};


const Skills = ({ content }) => {
  return (
    <Section id="skills">
      <FillSection>

        <Title style={styles.title}>{`STUFF I AM GOOD AT`}</Title>

        <Cell style={{ width: '100%', overflow: 'visible' }}>
          { content.map((skill, idx) => {
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
