import React from 'react';
import { styles } from '../../styles';


const BorderGrad = ({ children, style }) => (
    <div style={{...styles.sectionItem, ...style}}>
        { children }
    </div>
);

export default BorderGrad;
