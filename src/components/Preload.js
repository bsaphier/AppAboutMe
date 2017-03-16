import React from 'react';

import { Section } from './displayComponents';
import HexagonSpinner from './HexagonSpinner';


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
      <HexagonSpinner animation="rotation" duration={3} reverse>
        <HexagonSpinner animation="rotation" duration={3}>
          <HexagonSpinner animation="rotation" duration={3} reverse>
            <HexagonSpinner animation="rotation" duration={3}>
              <HexagonSpinner animation="rotation" duration={3} />
            </HexagonSpinner>
          </HexagonSpinner>
        </HexagonSpinner>
      </HexagonSpinner>
    </div>
  </Section>
);

export default Preload;
