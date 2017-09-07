import React from 'react';
import { styles } from '../../styles';


const FillSection = ({ children, style, ...props }) => (
    <div style={{...styles.fillSection, ...style}} {...props}>
        { children }
    </div>
);

export default FillSection;
