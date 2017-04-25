import React from 'react';

import Skill from './Skill';
import colors from '../../../bin/colors';
import { Cell, Title, Section, SectionFoot, FillSection } from '../../displayComponents';


const styles = {
  title: {
    margin: 0,
    fontWeight: 900,
    fontSize: '5rem',
    letterSpacing: '-0.25rem',
  },
  // text: {
  //   cursor: 'default',
  //   color: colors.OPERA_MAUVE,
  //
  //   fontWeight: 400,
  //   fontSize: '1.6rem',
  //
  //   textShadow: `
  //     1px 1px 0 ${colors.MENU_DARKER},
  //     1px 2px 0 ${colors.MENU_DARKER},
  //     1px 3px 0 ${colors.MENU_DARKER},
  //     1px 4px 0 ${colors.MENU_DARKER}`
  // },
  itemWrapper: {
    padding: '0.6rem 1.6rem',
    display: 'inline-block',
    margin: '5px',
    background: colors.AMETHYST,
    borderRadius: '0.5rem'
    // border: `solid 5px ${colors.AMETHYST}`
  },
  item: {
  }
};


const Skills = ({ content }) => {
  return (
    <Section id="skills">
      <FillSection>

        <Title style={styles.title}>{`STUFF I AM GOOD AT`}</Title>

        <Cell style={{ width: '100%' }}>

          {/* <div style={styles.itemWrapper}>
            <Skill skill="Hi" />
          </div> */}

          {
            content.map((skill) => {
              return (
                <div key={`skill-${skill}`} style={styles.itemWrapper}>
                  <Skill skill={skill} />
                </div>
              );
            })
          }
        </Cell>

        <SectionFoot to="" text="TO THE TOP" />

      </FillSection>
    </Section>
  );
};


export default Skills;
