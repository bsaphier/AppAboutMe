import React from 'react';
import { styles } from '../../styles';


const Title = ({ style, children, parentStyle }) => (
    <div style={{...styles.title.title, ...parentStyle}}>
        <span style={{ ...styles.title.text, ...style }}>
            { children }
        </span>
    </div>
);

export default Title;
