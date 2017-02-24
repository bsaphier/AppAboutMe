import React from 'react';


const styles = {
  navWrap: {
    width: '100%',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    margin: '0 auto',
    zIndex: 999,
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundImage: 'linear-gradient(rgb(89, 89, 89), rgb(38, 38, 38))'
  },
  navList: {
    margin: 0,
    padding: 0,
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
    color: 'rgb(68, 77, 255);',
    WebkitTransition: 'color .2s ease-in-out',
    MozTransition: 'color .2s ease-in-out',
    msTransition: 'color .2s ease-in-out',
    transition: 'color .2s ease-in-out'
  }
};


export const NavItem = ({ link, name }) => {
  const linkLink = link === 'home'
    ? (<a style={styles.navLink} className="smoothscroll shadow" href="">{name}</a>)
    : (<a style={styles.navLink} className="smoothscroll shadow" href={`#${link}`}>{name}</a>);
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
