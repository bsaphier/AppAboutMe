import React from 'react';
import { Motion, presets, spring } from 'react-motion';

const styles = {
  button: {
    cursor: 'pointer',
    margin: '.3em 0em',
    padding: '.3em 1em',

    fontWeight: 400,
    textAlign: 'center',
    textTransform: 'uppercase',

    color: 'rgb(45, 45, 45)',
    borderRadius: '.3em',
    background: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)'
  }
};

const Button = ({ children, style, link, title, ...props }) => {

  let buttonUp = true;

  let clickStyle = buttonUp
    ? {
        buttonDepth: 0
      }
    : {
        buttonDepth: spring(2.0)
      };

  const toggleButton = () => {
    buttonUp = !buttonUp;
  };

  return (
    <a href={link ? link : null} title={title}>
      <Motion style={clickStyle}>
        {(interpStyle) => {

          let motionStyle = {
            boxShadow: `inset rgba(45, 45, 45, 0.5) 0 0 5px ${interpStyle.buttonDepth}px`
          };

          return (
            <div
              className="button"
              style={{...styles.button, ...motionStyle, ...style}}
              onMouseDown={() => {
                console.log(buttonUp);
                toggleButton();
              }}
              {...props}
              >
              { children }
            </div>
          );
        }}
      </Motion>
    </a>
  );
};

export default Button;
