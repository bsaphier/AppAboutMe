import React from 'react';

import SectionFoot from '../SectionFoot';
import { hoverSpin } from '../HOC';
import {
  buttons,
  Cell,
  Title,
  Section,
  Divider,
  BorderGrad,
  FillSection,
  SideSection
} from '../displayComponents';
const { IconButton } = buttons;


const SocialButton = hoverSpin(IconButton);

const About = ({ content: { about, contact }, style }) => {

  const socialButtons = contact.links.map( link =>
    <SocialButton
      url={link.url}
      key={link.name}
      name={link.name}
      icon={link.icon}
      initialColor={[45, 45, 45]}
      hoverColor={[255, 68, 62]}
    />
  );


  return (
    <Section id="about">


      <SideSection title="Contact">

        <Title style={{
          ...style.title,
          fontSize: '3rem',
          letterSpacing: '-0.05em'
        }}>
          <span>Contact</span>
        </Title>

        <Cell style={{height: '62%'}}>
          <span>FILLER</span>
        </Cell>

        <Divider />

        <Cell style={{height: '21%', textAlign: 'center'}}>
          { socialButtons }
        </Cell>

      </SideSection>


      <FillSection style={{ background: 'rgb(81, 81, 81)' }}>

        <Cell>

          <BorderGrad style={{
            top: '47%',
            left: '49%',
            width: '74%',
            height: '65%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '-0.4em 0.3em 1em -0.1em rgba(45, 45, 45, 0.7)'
          }}>

            <Title className="shadow" style={style.title}>
              ABOUT ME
            </Title>

            <p style={style.text}>{about}</p>

          </BorderGrad>

        </Cell>

        <SectionFoot to="projects" text="NEXT" />

      </FillSection>


    </Section>
  );
};

export default About;
