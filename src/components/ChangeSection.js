import React from 'react';

const styles = {
  button: {
    textAlign: 'center'
  }
};

const ChangeSection = ({ link, text }) => {
  return (
    <div style={styles.button}>
      <p className="scrolldown">
        <a className="smoothscroll" href={`#${link}`}>
          { text }
        </a>
      </p>
    </div>
  );
};

export default ChangeSection;
