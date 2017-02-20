import React from 'react';


const ChangeSection = ({ link }) => {
  return (
    <p className="scrolldown">
      <a className="smoothscroll" href={`#${link}`}>
        ABOUT ME
      </a>
    </p>
  );
};

export default ChangeSection;
