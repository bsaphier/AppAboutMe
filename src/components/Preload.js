import React from 'react';
import { Hexagon, Section } from './displayComponents';
import { styles } from '../styles';


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
