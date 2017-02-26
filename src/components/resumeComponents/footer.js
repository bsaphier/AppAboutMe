import React from 'react';

const styles = {
  footer: {
    paddingTop: '48px',
    marginBottom: '48px',
    fontSize: 14,
    textAlign: 'center'
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
        <a className="smoothscroll" title="Back to Top" href="#">
          <h2 className="shadow">
            FOOTER
          </h2>
        </a>
    </footer>
  );
};

export default Footer;
