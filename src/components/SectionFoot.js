import React from 'react';
import Scroll from 'react-scroll';

import colors from '../bin/colors';
import Modernizr from '../../.modernizrrc';
import { scrollToTop } from '../bin/scrollHelpers';
import { Icon } from './displayComponents';
import { clickSpin } from './HOC';


const transform = Modernizr.prefixed('transform');

const { Link } = Scroll;

const NavButton = clickSpin(Icon);

const styles = {
  foot: {
    position: 'absolute',
    zIndex: 9,
    left: '50%',
    bottom: 0,
    // width: '100%',
    // height: '8.33%',
    textAlign: 'center',
    [transform]: 'translate(-50%, 0)'
  },
  button: {
    cursor: 'pointer',
    verticalAlign: 'middle',
    color: '#FFF',
    fontSize: '5rem',
    background: 'transparent',
    [transform]: 'scale(1) translate(0,0)'
  }
};


const SectionFoot = ({ to }) => (
  <div style={styles.foot}>
    { to.length === 0
      ? <div style={{[transform]: 'rotate(180deg)'}}>
          <a onClick={scrollToTop} >
            <NavButton
              icon="angle-down"
              initialColor={[255, 68, 62, 1]}
              clickColor={[81, 81, 81, 1]}
              style={styles.button} />
          </a>
        </div>
      : <Link to={to} smooth={true} duration={500} >
          <NavButton
            icon="angle-down"
            initialColor={[255, 68, 62, 1]}
            clickColor={[81, 81, 81, 1]}
            style={styles.button} />
        </Link>
    }
  </div>
);


export default SectionFoot;
