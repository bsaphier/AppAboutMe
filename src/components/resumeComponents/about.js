import React from 'react';

import Cell from '../Cell';
import Title from '../Title';
import SideSection from '../SideSection';
import Section from '../Section';
import FillView from '../FillView';
import BorderGrad from '../BorderGrad';
import SectionFoot from '../SectionFoot';

const About = ({ content, style }) => {
  return (
    <Section id="about">

      <SideSection title="Contact">
        <Title style={{
          ...style.title,
          fontSize: '6vh',
          letterSpacing: '-0.05em'
        }}>
          <span>Contact</span>
        </Title>
      </SideSection>

      <FillView style={{background: 'rgb(81, 81, 81)'}}>
        <Cell>
          <BorderGrad style={{
            top: '47%',
            left: '49%',
            width: '74%',
            height: '65%',
            transform: 'translate(-50%, -50%)'
          }}>
            <Title className="shadow" style={style.title}>
              ABOUT ME
            </Title>
            <p style={style.text}>{content}</p>
          </BorderGrad>
        </Cell>
        <SectionFoot to="projects" text="NEXT" />
      </FillView>

    </Section>
  );
};

export default About;
