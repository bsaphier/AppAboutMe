import React from 'react';


const Banner = ({ name }) => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>{name}</h1>
        <h2>My site is currently under construction. Come back soon!</h2>
      </div>
    </div>
  );
};

export default Banner;
