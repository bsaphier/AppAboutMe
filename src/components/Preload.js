import React from 'react';

import { Hexagon, Section } from './displayComponents';

const styles = {
  preloader: {
    margin: 'auto',
    width: '30em',
    height: '30em',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};


const Preload = () => (
  <Section>
    <div className="preloader hex" style={styles.preloader}>
      <Hexagon animation="rotation" duration={3} reverse>
        <Hexagon animation="rotation" duration={3}>
          <Hexagon animation="rotation" duration={3} reverse>
            <Hexagon animation="rotation" duration={3}>
              <Hexagon animation="rotation" duration={3} />
            </Hexagon>
          </Hexagon>
        </Hexagon>
      </Hexagon>
    </div>
  </Section>
);

export default Preload;
