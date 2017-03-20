import React from 'react';

const styles = {
    carouselPanel: {
      display: 'block',
      position: 'absolute',
      width: '50%',
      height: '50%',
      top: '25%',
      left: '25%',
      border: '2px solid black',
      lineHeight: '20em',
      textAlign: 'center',

      backgroundColor: 'aquamarine',
      opacity: 0.3
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
