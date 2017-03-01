import React from 'react';

const styles = {
  banner: {
    // height: '50vh',
    margin: '0 auto',
    textAlign: 'center',
    display: 'inline-block',
    border: '5px solid',
    borderImage: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)',
    borderImageSlice: 1
  },
  title: {
    color: 'rgb(255, 255, 255)',
    margin: '0 20px 18px 20px',
    textShadow: '2px 2px 0px rgba(255, 68, 62, 1)',
    WebkitTransition: 'all .3s ease-in-out',
    MozTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out'
  }
};

const hover = event => {
  event.target.style.color = 'rgb(68, 77, 255)';
};

const leave = event => {
  event.target.style.color = 'rgb(255, 255, 255)';
};

const Welcome = () => {
  return (
    <div style={styles.banner}>
      <h1
        style={styles.title}
        onMouseEnter={hover}
        onMouseLeave={leave}
      >
        Hi, my name is Ben Saphier
      </h1>
      <h2
        style={styles.title}
        onMouseEnter={hover}
        onMouseLeave={leave}
      >
        Come back soon!
      </h2>
    </div>
  );
};

export default Welcome;
