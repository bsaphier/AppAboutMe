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
      <h2 className="shadow">
        <Link to="/resume">
          FOOTER
        </Link>
      </h2>
    </footer>
  );
};

export default Footer;
