import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';

import { toggleWelcome } from '../actions';

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
  },
  cell: {
    position: 'absolute',
    top: '38%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    verticalAlign: 'middle',
    // WebkitTransition: 'all .3s ease-in-out',
    // MozTransition: 'all .3s ease-in-out',
    // transition: 'all .3s ease-in-out'
  },
  title: {
    display: 'flex',
    textAlign: 'justify',
    textTransform: 'uppercase',
  },
  text: {
    margin: '0 auto',
    display: 'inline-block',
    whiteSpace: 'pre-line',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)'
  }
};

const hover = event => {
  let { color } = event.target.style;
  // color = 'rgb(68, 77, 255)';
};

const leave = event => {
  let { color } = event.target.style;
  // color = 'rgb(255, 255, 255)';
};

// const enter = event => {
//   // if (event.target.parentNode.parentNode.id === 'cell') {
//     document.getElementById('cell').style.top = '-38%';
//   // }
// };
//
// const exit = event => {
//   document.getElementById('cell').style.top = '38%';
// };

const Title = ({ style, children }) => (
  <div style={styles.title}>
    <span
      onMouseOver={hover}
      onMouseLeave={leave}
      style={{
        ...styles.text,
        ...style
      }}
    >
      { children }
    </span>
  </div>
);


const Welcome = ({ welcomeIn, toggleWelcomeText }) => {

  let titleIn = welcomeIn ? {top: spring(38)} : {top: spring(-38)};

  //*TODO create title components by iterating instead of inline
  return (
    <div style={styles.banner} onClick={toggleWelcomeText}>
      {/* <a onClick={exit}>button</a> */}
      <Motion style={titleIn}>
        {(interpStyle) => (
          <div id="cell" style={{...styles.cell, top: `${interpStyle.top}%`}}>
            <Title style={{
              fontWeight: 500,
              fontSize: '14vh',
              lineHeight: '11vh',
              paddingRight: '0.07em',
              letterSpacing: '-0.03em'
            }}>
              Hello
            </Title>
            <Title style={{
              fontWeight: 100,
              fontSize: '5vh',
              lineHeight: '4vh',
              letterSpacing: '0.25em'
            }}>
              My name is
            </Title>
            <Title style={{
              fontWeight: 900,
              fontSize: '23vh',
              lineHeight: '16.2vh',
              paddingTop: '0.03em',
              paddingRight: '0.1em',
              letterSpacing: '-0.06em'
            }}>
              <b style={{letterSpacing: '-0.08em'}}>B</b>en
            </Title>
            <Title style={{
              fontWeight: 100,
              fontSize: '12vh',
              fontStyle: 'italic',
              lineHeight: '9.6vh',
              paddingRight: '0.15em',
              letterSpacing: '-0.08em'
            }}>
              Saphier
            </Title>
            <Title style={{
              fontWeight: 900,
              fontSize: '7vh',
              lineHeight: '5.1vh',
              wordSpacing: '-0.05em',
              paddingTop: '0.07em',
              paddingRight: '0.15em',
              letterSpacing: '-0.05em'
            }}>
              I like to mix
            </Title>
            <Title style={{
              fontWeight: 100,
              fontSize: '6.66vh',
              lineHeight: '7vh',
              paddingRight: '0.2em',
              letterSpacing: '-0.1em'
            }}>
              sound & code
            </Title>
          </div>
        )}
      </Motion>
    </div>
  );
};


const mapStateToProps = ({ app }) => ({
  welcomeIn: app.welcomeIn
});

const mapDispatchToProps = (dispatch) => ({
  toggleWelcomeText: () => dispatch(toggleWelcome())
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
