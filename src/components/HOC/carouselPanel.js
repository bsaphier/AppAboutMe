import React from 'react';
import Modernizr from '../../../.modernizrrc';
import { styles } from '../../styles';


const transform = Modernizr.prefixed('transform');

const carouselPanel = ({ idx, axis, theta, radius }) => Component => {
    let angle = theta * idx;
    return (
        <div
            key={`carouselPanel${idx}`}
            className="carousel-panel"
            style={{
                ...styles.carouselPanel,
                [ transform ]: `rotate${axis}(${angle}deg) translateZ(${radius}px)`
            }}>
            { Component }
        </div>
    );
};

export default carouselPanel;
