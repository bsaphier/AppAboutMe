import React from 'react';
import { styles } from '../../styles';


const Icon = ({ icon, style }) => {
    let iconStyle = { ...styles.iconStyle, ...style };
    return (
        <i className={`icon-${icon}`} style={iconStyle} />
    );
};

export default Icon;
