import React from 'react';

const styles = {
  section: {
    width: '100vw',
    height: '100vh',
    position: 'relative'
  }
};

const Section = (props) => (
  <section className="section" id={props.id} style={styles.section}>
    { props.children }
  </section>
);

export default Section;
