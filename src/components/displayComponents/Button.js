import React from 'react';


const styles = {
  button: {
    cursor: 'pointer',
    margin: '.3em 0em',
    padding: '.3em 1em',

    fontWeight: 400,
    textAlign: 'center',
    textTransform: 'uppercase',

    borderRadius: '.3em',
    background: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)'
  }
};

const Button = ({ children, style, link, title, ...props }) => {
  return (
    <a href={link ? link : null} title={title}>
      <div className="button" style={{...styles.button, ...style}} {...props}>
        { children }
      </div>
    </a>
  );
};

export default Button;
