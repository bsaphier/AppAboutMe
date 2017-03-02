import React from 'react';

const styles = {
  banner: {
    position: 'relative',
    background: 'none',
    textAlign: 'center',
    color: 'rgba(255, 68, 62, 1)',
    padding: '40pt',
    width: '100%',
    height: '100%',
    paddingTop: 0,
    display: 'table',
    // display: 'inline-block',
    // border: '5px solid',
    // borderImage: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)',
    // borderImageSlice: 1
  },
  cell: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  title: {
    width: '38%',
    margin: '0px auto',
    display: 'block',
    wordSpacing: '0px',
    textAlign: 'justify',
    textTransform: 'uppercase',
    // color: 'rgb(255, 255, 255)',
    // margin: '0 20px 18px 20px',
    // textShadow: '2px 2px 0px rgba(255, 68, 62, 1)',
    // WebkitTransition: 'all .3s ease-in-out',
    // MozTransition: 'all .3s ease-in-out',
    // transition: 'all .3s ease-in-out'
  },
  text: {
    display: 'inline-block',
    whiteSpace: 'pre-line'
  }
};
//
// const hover = event => {
//   event.target.style.color = 'rgb(68, 77, 255)';
// };
//
// const leave = event => {
//   event.target.style.color = 'rgb(255, 255, 255)';
// };

const Welcome = () => {
  return (
    <div style={styles.banner}>
      <div style={styles.cell}>
        <h1 style={styles.title}>
          <span style={{fontSize: '8vh', ...styles.text}}>
            Hello
          </span>
        </h1>
        <h1 style={styles.title}>
          <span style={{fontSize: '8vh', ...styles.text}}>
            my name is Ben Saphier
          </span>
        </h1>
        <p style={styles.title}>
          <span style={{fontSize: '10vh', ...styles.text}}>
            Come back soon!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
