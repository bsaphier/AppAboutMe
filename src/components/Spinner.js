import React from 'react';
import { CircularProgress } from 'material-ui';

import Section from './Section';

const styles = {
  before: {
    margin: 0,
    height: '50vh',
    display: 'inline-block'
  }
};

const Spinner = () => (
  <Section>
    <div style={{textAlign: 'center'}}>
      <div style={styles.before} />
      <CircularProgress size={80} thickness={5} />
    </div>
  </Section>
);

export default Spinner;
