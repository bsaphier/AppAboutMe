import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  button: {
    display: 'block',
    textAlign: 'center',
    borderRadius: '100%',
    color: 'rgb(68, 77, 255)',
    margin: '0 20px 18px 20px',
    WebkitTransition: 'all .3s ease-in-out',
    MozTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out'
  }
};

const hover = event => {
  event.target.style.color = 'rgb(255, 43, 37)';
};

const leave = event => {
  event.target.style.color = 'rgb(68, 77, 255)';
};

const ChangeSection = ({ link, text }) => {
  return (
    <div
      style={styles.button}
      onMouseEnter={hover}
      onMouseLeave={leave}
    >
      <Link to={`/resume/${link}`} style={styles.button}>{ text }</Link>
    </div>
  );
};

export default ChangeSection;
