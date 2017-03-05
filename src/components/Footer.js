import React from 'react';

import { scrollToTop } from '../bin/scrollHelpers';

const styles = {
  footer: {
    bottom: 0,
    paddingTop: '48px',
    marginBottom: '48px',
    fontSize: 14,
    textAlign: 'center'
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h2 className="shadow">
        <a onClick={scrollToTop}>
          FOOTER
        </a>
      </h2>
    </footer>
  );
};

export default Footer;
