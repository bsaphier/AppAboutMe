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
  content.map( job => {
    return (
      <SectionItem key={job.business}>
        <h1>{ job.business }</h1>
        <h2>{ job.title }</h2>
        <p>{ job.location }</p>
        <p>{ job.duration }</p>
        <ul>{ description(job.description) }</ul>
      </SectionItem>
    );
  });


const Work = ({ content }) => {
  return (
    <section id="work">
      <h1 className="shadow">EXPERIENCE</h1>
      { list(content) }
      <ChangeSection link="education" text="NEXT" />
    </section>
  );
};

export default Work;
