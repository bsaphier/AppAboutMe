import React from 'react';
import { styles } from '../../styles';


let burger, rightSideWrapper;

const SideSection = ({ style, children, ...props }) => {

    rightSideWrapper = styles.rightSideWrapper;

    if (props.burger && props.burger.open) {
        burger = 'hamburger';
    } else {
        burger = 'hamburger hide';
        rightSideWrapper = { ...styles.rightSideWrapper, width: 0 };
    }

    return (
        <div className={`side-section ${burger}`} style={rightSideWrapper}>
            <div style={styles.before} />
            <div style={{...styles.rightSideContainer, ...style}}>
                { children }
            </div>
            <div style={{...styles.before, ...styles.after}} />
        </div>
    );
};

export default SideSection;
