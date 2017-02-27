import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <h2 className="shadow">
            FOOTER
          </h2>
        </Link>
    </footer>
  );
};

export default Footer;
