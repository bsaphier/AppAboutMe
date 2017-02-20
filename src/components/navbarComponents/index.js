import React from 'react';

import NavItem from './navItem';

const Navbar = ({ navbar }) => {
  return (
    <nav id="nav-wrap" className="opaque">
      <ul id="nav" className="nav">
        {Object.keys(navbar).map((navLink, idx) => {
          const navItemTitle = navbar[navLink];
          return (navItemTitle === navbar.root) ?
            null :
            (<NavItem
              link={navLink}
              key={`nav${idx}`}
              name={navItemTitle}
            />);
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
