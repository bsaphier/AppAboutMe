import React from 'react';


const Banner = ({ title }) => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1 className="top responsive-headline">{title.name}</h1>
        <h2 className="top responsive-headline">{title.text}</h2>
      </div>
    </div>
  );
};

export default Banner;
