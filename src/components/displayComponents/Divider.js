import React from 'react';
import { styles } from '../../styles';


const Divider = ({ style, vertical = false }) => {
    let orientation = vertical ? styles.vertical : styles.horizontal;
    return (
        <span style={{ ...orientation, ...styles.divider, ...style }} />
    );
};

export default Divider;
