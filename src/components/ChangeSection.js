import React from 'react';
import Scroll from 'react-scroll';

import { scrollToTop } from '../bin/scrollHelpers';

const { Link } = Scroll;

const styles = {
  button: {
    display: 'block',
    textAlign: 'center',
    borderRadius: '100%',
    color: 'rgb(68, 77, 255)',
    margin: '0 20px 18px 20px',
    WebkitTransition: 'all .3s ease-in-out',
    MozTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out'
  }
};

const hover = event => {
  event.target.style.color = 'rgb(255, 68, 62)';
};

const leave = event => {
  event.target.style.color = 'rgb(68, 77, 255)';
};

const ChangeSection = ({ to, text }) => {
  return to.length === 0
    ? (
      <div onMouseEnter={hover} onMouseLeave={leave}>
        <a onClick={scrollToTop} style={styles.button}>
          { text }
        </a>
      </div>
    ) : (
      <div onMouseEnter={hover} onMouseLeave={leave}>
        <Link to={to} smooth={true} duration={500} style={styles.button}>
          { text }
        </Link>
      </div>
    );
};

export default ChangeSection;
