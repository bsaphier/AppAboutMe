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
    // display: 'table',
  },
  cell: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '62%',
    // display: 'table-cell',
    verticalAlign: 'middle',
    // border: '5px solid',
    // borderImage: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)',
    // borderImageSlice: 1,
  },
  title: {
    display: 'flex',
    // wordSpacing: '0px',
    textAlign: 'justify',
    textTransform: 'uppercase',
    // WebkitTransition: 'all .3s ease-in-out',
    // MozTransition: 'all .3s ease-in-out',
    // transition: 'all .3s ease-in-out'
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

const Title = ({ style, title }) => (
  <div style={styles.title}>
    <span
      onMouseOver={hover}
      onMouseLeave={leave}
      style={{
        ...styles.text,
        ...style
      }}
    >
      { title }
    </span>
  </div>
);

// I like to explore the crossover between music & technology
const Welcome = () => {
  return (
    <div style={styles.banner}>
      <div style={styles.cell}>
        <Title
          title="I'm Ben"
          style={{
            fontWeight: 900,
            fontSize: '13vh',
            lineHeight: '12vh',
            letterSpacing: '-0.009em'
          }}
        />
        <Title
          title="Saphier"
          style={{
            fontWeight: 100,
            fontSize: '13vh',
            fontStyle: 'italic',
            lineHeight: '12vh',
            padding: '0 0.03em',
            letterSpacing: '-0.08em'
          }}
        />
        <Title
          title="I'm a software engineer"
          style={{
            fontWeight: 900,
            fontSize: '3.8vh',
            padding: '0 0.038em',
            letterSpacing: '-0.038em'
          }}
        />
        <Title
          title="music & technology"
          style={{
            fontWeight: 100,
            fontSize: '5vh',
            letterSpacing: '-0.08em'
          }}
        />
      </div>
    </div>
  );
};

export default Welcome;
