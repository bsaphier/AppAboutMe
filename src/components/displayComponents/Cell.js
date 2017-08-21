import React from 'react';
import { styles } from '../../styles';


const Cell = ({ children, style, ...props }) => (
    <div className="cell" style={{...styles.cell, ...style}} {...props}>
        { children }
    </div>
);

export default Cell;
