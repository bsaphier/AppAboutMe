import React from 'react';

import NavItem from './navItem';


const Navbar = ({ navLinks }) => {
  return (
    <nav id="nav-wrap" className="opaque">
      <ul id="nav" className="nav">
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
