import React from 'react';

const styles = {
    carouselPanel: {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',

      WbkitBackfaceVisibility: 'hidden',
        MozBackfaceVisibility: 'hidden',
          OBackfaceVisibility: 'hidden',
           backfaceVisibility: 'hidden'
    }
};


const carouselPanel = ({ idx, axis, theta, radius, transform }) => Component => {

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
