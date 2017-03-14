import React from 'react';


const styles = {

  socialButton: {
    fontSize: '24px',
    lineHeight: '32px',
    display: 'inline-block'
  },

  fontIcon: {
    fontFamily: 'fontello',
    fontStyle: 'normal',
    fontWeight: 'normal',
    speak: 'none',

    display: 'inline-block',
    textDecoration: 'inherit',
    width: '1em',
    marginRight: '.2em',
    textAlign: 'center',
    /* opacity: .8, */

    /* For safety - reset parent styles, that can break glyph codes*/
    fontVariant: 'normal',
    textTransform: 'none',

    /* fix buttons height, for twitter bootstrap */
    lineHeight: '1em',

    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    marginLeft: '.2em',

    /* you can be more comfortable with increased icons size */
    fontSize: '200%',

    /* Font smoothing. That was taken from TWBS */
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',

    /* Uncomment for 3D effect */
    /* textShadow: '1px 1px 1px rgba(127, 127, 127, 0.3)' */
  }

};


const SocialButton = ({ url, icon }) => {
  return (
    <span className="social-button" style={styles.socialButton}>

      <a href={url}>
        <i className={`icon-${icon}`} style={styles.fontIcon} />
      </a>

    </span>
  );
};

export default SocialButton;
