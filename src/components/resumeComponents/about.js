import React from 'react';

import SectionItem from '../SectionItem';
import ChangeSection from '../ChangeSection';

const About = ({ content }) => {
  return (
    <section id="about">
      <h1 className="shadow">ABOUT</h1>
      <SectionItem>
        <p>{content}</p>
      </SectionItem>
      <ChangeSection link="work" text="NEXT" />
    </section>
  );
};

export default About;
