import React from 'react';
import { connect } from 'react-redux';

import Modernizr from '../../../.modernizrrc';
const transform = Modernizr.prefixed('transform');


const styles = {
    panel: {
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


const mapStateToProps = ({ carousel: { axis, theta, radius, currPanel }}) => ({
  axis,
  theta,
  radius,
  currPanel
});


const carouselPanel = (Component, key = 0) => {
  const Panel = ({ axis, theta, radius }) => {

    let angle = theta * key;

    return (
      <div
        className="carousel-panel"
        key={`carouselPanel${key + 1}`}
        style={{
          ...styles.panel,
          [transform]: `rotate${axis}(${angle}deg) translateZ(${radius}px)`
        }}
        >
        { Component }
      </div>
    );
  };
  return connect(mapStateToProps)(Panel);
};


export default carouselPanel;
