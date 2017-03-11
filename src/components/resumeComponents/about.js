import React from 'react';

import Cell from '../Cell';
import Title from '../Title';
import Sidebar from '../Sidebar';
import Section from '../Section';
import FillView from '../FillView';
import SectionItem from '../SectionItem';
import SectionFoot from '../SectionFoot';

const About = ({ content, style }) => {
  return (
    <Section id="about">
      <Sidebar title="Contact">
        <Title style={{
          ...style.title,
          fontSize: '6vh',
          letterSpacing: '-0.05em'
        }}>
          Contact
        </Title>
      </Sidebar>
      <FillView style={{background: 'rgb(81, 81, 81)'}}>
        <Cell>
          <SectionItem style={{
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
          </SectionItem>
        </Cell>
      </FillView>
      <SectionFoot to="projects" text="NEXT" sidebar />
    </Section>
  );
};

export default About;
