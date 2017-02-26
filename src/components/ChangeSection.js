import React from 'react';

const styles = {
  button: {
    textAlign: 'center'
  },
  link: {
    // position: 'absolute',
    // bottom: 30,
    // left: '50%',
    // marginLeft: -29,
    // display: 'block',
    // height: '42px',
    // width: 'auto',
    borderRadius: '100%',
    color: 'rgb(68, 77, 255)',
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
    <div style={styles.button}>
      <p
        className="scrolldown"
        style={styles.link}
        onMouseEnter={hover}
        onMouseLeave={leave}
      >
        <a href={`#${link}`} className="smoothscroll">
          { text }
        </a>
      </p>
    </div>
  );
};

export default ChangeSection;
