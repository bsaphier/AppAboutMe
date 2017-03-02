import React from 'react';
import { connect } from 'react-redux';


const Header = (props) => {
  const styles = {
    window: {
      width: '100%',
      height: '100vh',
      paddingTop: '50px',
      position: 'relative'
    }
  };

  return (
    <section id={props.id} style={styles.window}>
      { props.children }
    </section>
  );
};

export default connect()(Header);
