import React from 'react';

import Modernizr from '../../../.modernizrrc';


const transform = Modernizr.prefixed('transform');

const styles = {
    carouselPanel: {
      display: 'block',
      position: 'absolute',
      zIndex: 5,
      width: '100%',
      height: '100%',

      WbkitBackfaceVisibility: 'hidden',
        MozBackfaceVisibility: 'hidden',
          OBackfaceVisibility: 'hidden',
           backfaceVisibility: 'hidden'
    }
};


const carouselPanel = ({ idx, axis, theta, radius }) => Component => {

    let angle = theta * idx;

    return (
      <div
        key={`carouselPanel${idx}`}
        className="carousel-panel"
        style={{
          ...styles.carouselPanel,
          [ transform ]: `rotate${axis}(${angle}deg) translateZ(${radius}px)`
        }}
        >
          { Component }
        </div>
      );
};

export default carouselPanel;
