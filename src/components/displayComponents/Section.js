import React from 'react';

const styles = {
  section: {
    position: 'relative',
    top: 0,
    left: 0,
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
  }
};

const Section = (props) => (
  <section className="section" id={props.id} style={{...styles.section, ...props.style}}>
    { props.children }
  </section>
);

export default Section;
