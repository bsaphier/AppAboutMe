import React from 'react';
import { connect } from 'react-redux';

const Section = (props) => {
  const styles = {
    window: {
      width: '100vw',
      height: '100vh',
      // paddingTop: '50px',
      position: 'relative'
    }
  };

  return (
    <section id={props.id} style={styles.window}>
      { props.children }
    </section>
  );
};

export default connect()(Section);
