import React from 'react';

const styles = {
  banner: {
    height: '50vh',
    margin: '0 auto',
    textAlign: 'center',
    display: 'inline-block'
  },
  title: {
    color: 'rgb(250, 255, 255)',
    margin: '0 20px 18px 20px',
    // textShadow: '0px 1px 3px rgba(0, 0, 0, .8)',
    WebkitTransition: 'all .3s ease-in-out',
    MozTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out'
  }
};

const hover = event => {
  event.target.style.color = 'rgb(68, 77, 255)';
};

const leave = event => {
  event.target.style.color = 'rgb(250, 255, 255)';
};

const Banner = ({ name }) => {
  return (
    <div style={styles.banner}>
      <div className="banner-text">
        <h1
          style={styles.title}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          {name}
        </h1>
        <h2
          style={styles.title}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          My site is currently under construction. Come back soon!
        </h2>
      </div>
    </div>
  );
};

export default Banner;
