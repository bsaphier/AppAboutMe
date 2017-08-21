import React from 'react';
import { styles } from '../../styles';


const Hexagon = ({ reverse, children, animation, duration }) => {
    let direction = reverse ? 'reverse' : '';

    return (
        <div className="spinner-1" style={styles.spinner} >
            <div className="conatiner-A" style={styles.containerA}>
                <span
                    className="hex0"
                    style={{
                        ...styles.hex,
                        animation: `${duration}s ease-in-out infinite ${direction} ${animation}0`
                    }} />
                <span
                    className="hex120"
                    style={{
                        ...styles.hex,
                        transform: 'rotate(120deg)',
                        animation: `${duration}s ease-in-out infinite ${direction} ${animation}120`
                    }} />
                <span
                    className="hex240"
                    style={{
                        ...styles.hex,
                        transform: 'rotate(240deg)',
                        animation: `${duration}s ease-in-out infinite ${direction} ${animation}240`
                    }} />
                    { children }
                </div>
            </div>
        );
    };

export default Hexagon;
