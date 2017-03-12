import React from 'react';

import {
  Cell,
  Title,
  Section,
  Divider,
  FillView,
  BorderGrad,
  SideSection
} from '../displayComponents';
import SectionFoot from '../SectionFoot';


const About = ({ content: { about, contact }, style }) => {
  return (
    <Section id="about">

      <SideSection title="Contact">
        <Title style={{
          ...style.title,
          fontSize: '3em',
          letterSpacing: '-0.05em'
        }}>
          <span>Contact</span>
        </Title>
        <Cell style={{height: '62%'}} />
        <Divider />
        <Cell style={{height: '21%'}}>
          {contact.links.map( (link, idx) => (<div key={`${idx * 2}`}>{link.name}</div>) )}
        </Cell>
      </SideSection>

      <FillView style={{
        background: 'rgb(81, 81, 81)',
        boxShadow: 'inset -1em 0em 1em -0.7em rgba(45, 45, 45, 0.6)'
      }}>
        <Cell>
          <BorderGrad style={{
            top: '47%',
            left: '49%',
            width: '74%',
            height: '65%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0.1em 0.2em 1.3em rgba(45, 45, 45, 0.6)'
          }}>
            <Title className="shadow" style={style.title}>
              ABOUT ME
            </Title>
            <p style={style.text}>{about}</p>
          </BorderGrad>
        </Cell>
        <SectionFoot to="projects" text="NEXT" />
      </FillView>

    </Section>
  );
};

export default About;
