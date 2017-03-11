import React from 'react';
import Scroll from 'react-scroll';

import { scrollToTop } from '../bin/scrollHelpers';

const { Link } = Scroll;

const styles = {
  foot: {
    position: 'absolute',
    left: 0,
    bottom: '0%',
    width: '100%',
    height: '3em',
    background: 'rgba(45, 45, 45, 0.1)',
    textAlign: 'center',
  },
  button: {
    verticalAlign: 'middle',
    color: 'rgba(255, 255, 255, 1)',
    background: 'rgb(68, 77, 255)',
    display: 'inline-block',
    textDecoration: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    height: '100%',
    padding: '5pt 20px',
    cursor: 'pointer',
    WebkitTransition: 'all .3s ease-in-out',
    MozTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out'
  }
};

const hover = event => {
  event.target.style.background = 'rgb(255, 68, 62)';
};

const leave = event => {
  event.target.style.background = 'rgb(68, 77, 255)';
};

const SectionFoot = ({ to, text, sidebar }) => (
  <div style={sidebar
    ? {...styles.foot, width: 'calc(77%)'}
    : styles.foot}
    >
    { to.length === 0
    ? <a
        onMouseEnter={hover}
        onMouseLeave={leave}
        style={styles.button}
        onClick={scrollToTop}
        >
        { text }
      </a>
    : <Link
        to={to}
        smooth={true}
        duration={500}
        onMouseEnter={hover}
        onMouseLeave={leave}
        style={styles.button}
        >
        { text }
      </Link>
    }
  </div>
);

export default SectionFoot;
