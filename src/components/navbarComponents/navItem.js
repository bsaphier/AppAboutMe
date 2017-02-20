import React from 'react';


const NavItem = ({ link, name }) => {
  const linkLink = link === 'home'
    ? (<a className="smoothscroll shadow" href="">{name}</a>)
    : (<a className="smoothscroll shadow" href={`#${link}`}>{name}</a>);
  return (
    <li>{ linkLink }</li>
  );
};

export default NavItem;
