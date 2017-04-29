import React from 'react';

import Skill from './Skill';
import colors from '../../../bin/colors';
import Modernizr from '../../../../.modernizrrc';
import { Cell, Title, Section, SectionFoot, FillSection } from '../../displayComponents';


const transform = Modernizr.prefixed('transform');


const styles = {
  title: {
    margin: 0,
    fontWeight: 900,
    fontSize: '5rem',
    letterSpacing: '-0.25rem',
  },

  flexWrapper: {
    display: 'flex',
    width: '83%',
    height: '66%',

    margin: '40px auto',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

    WebkitFlexWrap: 'wrap',
    MSFlexWrap: 'wrap',
    flexWrap: 'wrap',
  },
  skillWrapper: {
    position: 'relative',
    zIndex: 1,

    margin: '5px 10px',
    padding: '15px 40px',

    minWidth: '180px',
    minHeight: '20px',

    background: '#fff',
    borderRadius: '0.38rem',
    border: `2px solid ${colors.AMETHYST}`,

    WebkitTransition: 'all ease-in-out .3s',
    MozTransition: 'all ease-in-out .3s',
    OTransition: 'all ease-in-out .3s',
    transition: 'all ease-in-out .3s',

    WebkitFlexGrow: 0,
    flexGrow: 0,
  }
};


const handleEnter = ({ currentTarget: { style } }) => {
  style.zIndex = 2;
  style.flexGrow = 0.20;
  style.padding = '15px 20px';
  style.background = colors.AMETHYST;
  style[transform] = 'translateY(-33%) scale(1.62)';
};


const handleLeave = ({ currentTarget: { style } }) => {
  style.zIndex = 1;
  style.flexGrow = 0;
  style.background = '#fff';
  style.padding = '15px 40px';
  style[transform] = 'translateY(0) scale(1)';
};


const Skills = ({ content }) => {
  return (
    <Section id="skills">
      <FillSection>

        <Title style={styles.title}>{`STUFF I AM GOOD AT`}</Title>

        <Cell style={{ width: '100%' }}>
          <div className="skillsFlexWrapper" style={styles.flexWrapper}>
            {
              content.map( skill => (
                <div
                  key={`skill-${skill}`}
                  style={styles.skillWrapper}
                  onMouseEnter={ handleEnter }
                  onMouseLeave={ handleLeave }>

                  <Skill skill={skill} />

                </div>
              ))
            }
          </div>
        </Cell>

        <SectionFoot to="" text="TO THE TOP" />

      </FillSection>
    </Section>
  );
};


export default Skills;
