import React from 'react';


const styles = {
  title: {
    display: 'flex',
    cursor: 'default',
    textAlign: 'justify',
    textTransform: 'uppercase',
  },
  text: {
    margin: '0 auto',
    paddingRight: '5px',
    display: 'inline-block',
    whiteSpace: 'pre-line',

    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    MsBackgroundClip: 'text',
    OBackgroundClip: 'text',

    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    MsTextFillColor: 'transparent',
    OTextFillColor: 'transparent',

    backgroundImage: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)'
  }
};


const Title = ({ style, children, parentStyle }) => (
  <div style={{...styles.title, ...parentStyle}}>
    <span style={{ ...styles.text, ...style }}>
      { children }
    </span>
  </div>
);

export default Title;
