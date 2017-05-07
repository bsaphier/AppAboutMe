import React from 'react';


const styles = {
  iconStyle: {
    width: '1.5em',
    height: '1.5em',
    margin: '0 auto',
    lineHeight: '1.5em',
    borderRadius: '50%',
    color: 'rgb(255, 255, 255)',
    background: 'rgba(45, 45, 45, 1)',

  /* -~- styling & comments from the fontello.com package -~- */
    fontFamily: 'fontello',
    fontStyle: 'normal',
    fontWeight: 'normal',
    speak: 'none',

    display: 'block',
    textDecoration: 'inherit',
    // marginRight: '.2em',
    textAlign: 'center',
    // opacity: '0.8',

    /* For safety - reset parent styles, that can break glyph codes*/
    fontVariant: 'normal',
    textTransform: 'none',

    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    // marginLeft: '.2em',

    /* you can be more comfortable with increased icons size */
    fontSize: '200%',

    /* Font smoothing. That was taken from TWBS */
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',

    /* Uncomment for 3D effect */
    // textShadow: '1px 1px 1px rgba(81, 81, 81, 0.3)'
  }
};


const IconButton = ({ icon, style, url = null, name = '', target = '_blank' }) => {

  const iconStyle = { ...styles.iconStyle, ...style };

  return (
    <a
      className="icon-button"
      href={url}
      title={name}
      target={target}
      rel="noopener noreferrer"
      >
      <i className={`icon-${icon}`} style={iconStyle} />
    </a>
  );
};

export default IconButton;
