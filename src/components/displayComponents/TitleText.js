import React from 'react';
import { styles } from '../../styles';


const TitleText = ({ id, sound, hover, leave, style, children }) => (
    <div
        style={styles.coverTitle}
        onMouseOver={hover ? () => hover(id, sound) : null}
        onMouseLeave={leave ? () => leave(id) : null}>
        <span style={{ ...styles.coverText, ...style }}>
            { children }
        </span>
    </div>
);


export default TitleText;
