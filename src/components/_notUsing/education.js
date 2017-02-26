import React from 'react';

import SectionItem from '../SectionItem';
import ChangeSection from '../ChangeSection';


const description = bulletPoints =>
  bulletPoints.map( bullet => (
    <li key={bullet.slice(0, 5)}>
      {bullet}
    </li>
  ));

const list = content =>
  content.map( school => {
    return (
      <SectionItem key={school.school}>
        <h2>{ school.school }</h2>
        <p>{ school.location }</p>
        <p>{ school.duration }</p>
        <ul>{ description(school.description) }</ul>
      </SectionItem>
    );
  });


const Education = ({ content, styling }) => {
  return (
    <section id="education" style={styling}>
      <h1 className="shadow">EDUCATION</h1>
      { list(content) }
      <ChangeSection link="skills" text="NEXT" />
    </section>
  );
};

export default Education;
