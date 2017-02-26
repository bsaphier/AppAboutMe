import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  button: {
    // textAlign: 'center',
    top: '50vh',
    display: 'block',
    color: 'rgb(68, 77, 255)',
    margin: '0 20px 18px 20px',
    WebkitTransition: 'all .3s ease-in-out',
    MozTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out'
  },
  link: {
    // position: 'absolute',
    // bottom: 30,
    // left: '50%',
    // marginLeft: -29,
    // display: 'block',
    // height: '42px',
    // width: 'auto',
    top: '50vh',
    borderRadius: '100%',
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
      <Link to={`/${link}`} style={styles.button}>{ text }</Link>
    </div>
  );
};

export default ChangeSection;
