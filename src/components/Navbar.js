import React from 'react';
import Scroll from 'react-scroll';

import { scrollToTop } from '../bin/scrollHelpers';

const { Link } = Scroll;

const styles = {
  navWrap: {
    width: '100%',
    maxHeight: '50px',
    textTransform: 'uppercase',
    // letterSpacing: '2.5px',
    margin: '0 auto',
    zIndex: 100,
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgb(45, 45, 45)'
  },
  navList: {
    margin: '0px',
    padding: '0px',
    border: 'none',
    outline: 'none',
    minHeight: '48px',
    width: 'auto',
    textAlign: 'center'
  },
  listItem: {
    position: 'relative',
    listStyle: 'none',
    height: '48px',
    display: 'inline-block'
  },
  navLink: {
    display: 'inline-block',
    padding: '8px 13px',
    lineHeight: '32px',
    textDecoration: 'none',
    textAlign: 'left',
    color: 'rgb(68, 77, 255)',
    WebkitTransition: 'all .2s ease-in-out',
    MozTransition: 'all .2s ease-in-out',
    msTransition: 'all .2s ease-in-out',
    transition: 'all .2s ease-in-out'
  }
};


export const NavItem = ({ link, name }) => {
  const linkLink = link === 'home'
    ? (
      <a onClick={scrollToTop} style={styles.navLink}>
        <p className="shadow">{ name }</p>
      </a>
    ) : (
      <Link
        to={link}
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
        style={styles.navLink}
      >
        <p className="shadow">{ name }</p>
      </Link>
    );
  return (
    <li style={styles.listItem}>{ linkLink }</li>
  );
};


const Navbar = ({ navLinks }) => {
  return (
    <nav style={styles.navWrap}>
      <ul style={styles.navList}>
        {Object.keys(navLinks).map((navLink, idx) => (
          <NavItem
            link={navLink}
            key={`nav${+idx}`}
            name={navLinks[navLink]}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
