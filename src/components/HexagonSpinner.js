import React from 'react';


const styles = {
  spinner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  containerA: {
    position: 'absolute',
    width: '75%',
    height: '75%',
    top: '12.5%',
    left: '12.5%'
  },
  hex: {
    position: 'absolute',
    boxSizing: 'border-box',
    width: '100%',
    height: '57.735%',
    top: '21.1325%',
    left: 0,
    borderLeft: '3px solid rgb(255, 64, 64)',
    borderRight: '3px solid rgb(255, 64, 64)'
  }
};

const HexagonSpinner = ({ reverse, children, animation, duration }) => {

  let direction = reverse ? 'reverse' : '';

  return (
    <div className="spinner-1" style={styles.spinner} >
      <div className="conatiner-A" style={styles.containerA}>
        <span
          className="hex0"
          style={{
            ...styles.hex,
            animation: `${duration}s ease-in-out infinite ${direction} ${animation}0`
          }}
        />
        <span
          className="hex120"
          style={{
            ...styles.hex,
            transform: 'rotate(120deg)',
            animation: `${duration}s ease-in-out infinite ${direction} ${animation}120`
          }}
        />
        <span
          className="hex240"
          style={{
            ...styles.hex,
            transform: 'rotate(240deg)',
            animation: `${duration}s ease-in-out infinite ${direction} ${animation}240`
          }}
        />
        { children }
      </div>
    </div>
  );
};

export default HexagonSpinner;
