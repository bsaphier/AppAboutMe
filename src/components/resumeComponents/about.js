import React from 'react';

import colors from '../../bin/colors';
import { hoverSpin } from '../HOC';
import {
  buttons,
  Cell,
  Title,
  Section,
  Divider,
  BorderGrad,
  FillSection,
  SideSection,
  SectionFoot
} from '../displayComponents';
const { IconButton } = buttons;
const SocialButton = hoverSpin(IconButton);


const styles = {
  aboutPanel: {
    top: '47%',
    left: '49%',
    width: '74%',
    height: '65%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '-0.4em 0.3em 1em -0.1em rgba(45, 45, 45, 0.7)'
  },

  before: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    //:TODO backgroundBlurr
  }
};


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

        <Title style={{ ...style.title, fontSize: '3rem', letterSpacing: '-0.05em' }}>
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

      <FillSection style={{ background: colors.MENU_DARK }}>
        <div style={styles.before} />

        <Cell>

          <BorderGrad style={styles.aboutPanel}>

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
