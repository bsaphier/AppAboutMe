import React from 'react';


const styles = {
  title: {
    display: 'flex',
    textAlign: 'justify',
    textTransform: 'uppercase'
  },
  text: {
    margin: '0 auto',
    display: 'inline-block',
    whiteSpace: 'pre',
    background: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)',

    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    MsTextFillColor: 'transparent',
    OTextFillColor: 'transparent',

    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    MsBackgroundClip: 'text',
    OBackgroundClip: 'text',
    backgroundClip: 'text'
  }
};


const TitleText = ({ id, sound, hover, leave, style, children }) => (
    <div
        style={styles.title}
        onMouseOver={hover ? () => hover(id, sound) : null}
        onMouseLeave={leave ? () => leave(id) : null}>
        <span style={{ ...styles.text, ...style }}>
            { children }
        </span>
    </div>
);


export default TitleText;
