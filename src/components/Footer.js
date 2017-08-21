import React from 'react';
import { styles } from '../styles';


const Footer = () => {
  return (
    <footer style={{width: '100vw'}}>
      <div style={styles.footer}>
        <div style={styles.credit}>

          <div>
            <span>This site is built with </span>
            <a href={'https://facebook.github.io/react'} target="_blank" rel="noopener noreferrer">React</a>
            <span> and the source code is available on </span>
            <a href={'https://github.com/bsaphier/app-about-me'} target="_blank" rel="noopener noreferrer">my Github.</a>
          </div>

          <span>Every component was conceived, designed and coded by Benjamin Saphier © 2017</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
