import React from 'react';
import Skill from './Skill';
import SectionFoot from '../../SectionFoot';
import colors from '../../../bin/colors';
import Modernizr from '../../../../.modernizrrc';
import { Cell, Title, Section, FillSection } from '../../displayComponents';
import { styles } from '../../../styles';


const transform = Modernizr.prefixed('transform');


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

const Skills = ({ content }) => (
    <Section id="skills">
        <FillSection>
            <Title style={styles.resumeComponents.skills.title}>{`SOME STUFF I AM GOOD AT`}</Title>
            <Cell style={{ width: '100%' }}>
                <div className="skillsFlexWrapper" style={styles.resumeComponents.skills.flexWrapper}>
                    {content.map( skill => (
                        <div
                            key={`skill-${skill}`}
                            style={styles.resumeComponents.skills.skillWrapper}
                            onMouseEnter={ handleEnter }
                            onMouseLeave={ handleLeave }>
                            <Skill skill={skill} />
                        </div>
                    ))}
                </div>
            </Cell>
            <SectionFoot to="" text="TO THE TOP" />
        </FillSection>
    </Section>
);

export default Skills;
