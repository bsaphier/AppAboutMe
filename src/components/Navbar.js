import React from 'react';
import { NavLink } from 'react-router-dom';


const styles = {
  navWrap: {
    width: '100%',
    maxHeight: '48px',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    margin: '0 auto',
    zIndex: 999,
    position: 'fixed',
    left: '0px',
    top: '0px',
    backgroundImage: 'linear-gradient(rgb(89, 89, 89), rgb(38, 38, 38))'
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
      <NavLink
        to="/"
        className="shadow"
        style={styles.navLink}
        activeClassName="active"
      >
        {name}
      </NavLink>
    ) : (
      <NavLink
        to={`/${link}`}
        className="shadow"
        style={styles.navLink}
        activeClassName="active"
      >
        {name}
      </NavLink>
    );
  return (
    <li style={styles.listItem}>{ linkLink }</li>
  );
};


const Navbar = ({ navLinks }) => {
  return (
    <nav style={styles.navWrap}>
      <ul style={styles.navList}>
        {Object.keys(navLinks).map((navLink, idx) =>
          (<NavItem
            link={navLink}
            key={`nav${+idx}`}
            name={navLinks[navLink]}
          />)
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
