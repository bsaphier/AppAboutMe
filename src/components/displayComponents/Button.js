import React from 'react';


const styles = {
  button: {
    backgroundColor: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)'
  }
};

const Button = ({ children, style }) => {
  return (
    <div className="button" style={{...styles.button, ...style}}>
      { children }
    </div>
  );
};

export default Button;
