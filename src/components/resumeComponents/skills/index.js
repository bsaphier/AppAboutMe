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

  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',

    width: '83%',
    height: '66%',
    margin: '40px auto',

    WebkitFlexWrap: 'wrap',
    MSFlexWrap: 'wrap',
    flexWrap: 'wrap',
  },
  itemWrapper: {
    padding: '0.3em 1em',
    margin: '10px 5px',

    borderRadius: '0.33rem',
    background: colors.AMETHYST,

    // WebkitFlexGrow: 1,
    // flexGrow: 1
  }
};


const handleEnter = ({ target }) => {
  console.log({target});
};


const handleLeave = ({ target }) => {
  console.log({target});
};


const Skills = ({ content }) => {
  return (
    <Section id="skills">
      <FillSection>

        <Title style={styles.title}>{`STUFF I AM GOOD AT`}</Title>

        <Cell style={{ width: '100%' }}>
          <div className="skillWrapper" style={styles.flexContainer}>
            {
              content.map((skill) => {
                return (
                  <div
                    key={`skill-${skill}`}
                    style={styles.itemWrapper}
                    onMouseEnter={ handleEnter }
                    onMouseLeave={ handleLeave }>
                    <Skill skill={skill} />
                  </div>
                );
              })
            }
          </div>
        </Cell>

        <SectionFoot to="" text="TO THE TOP" />

      </FillSection>
    </Section>
  );
};


export default Skills;
