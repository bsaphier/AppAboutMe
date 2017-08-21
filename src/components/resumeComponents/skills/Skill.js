import React, { Component } from 'react';
import Modernizr from '../../../../.modernizrrc';
import { styles } from '../../../styles';


const transform = Modernizr.prefixed('transform');

class Skill extends Component {

    constructor(props ) {
        super(props);
        this.state = {
            shadowScale: 1.038,
            initialSkew: -10,
            hoverSkew: -38,
            hoverShadowSkew: ((-38 / 2) * -1),
            initialShadowSkew: ((-10 / 2) * -1),
            characters: props.skill.split('')
        };
        this.handleLeave = this.handleLeave.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleLeave( index ) {
        let { shadowScale, initialSkew, initialShadowSkew } = this.state;
        let [ before, _, after ] = this[index].children;
        //:TODO refactor to React-Motion spring??
        before.style[transform] = `scale(${shadowScale}, 1) skew(0deg, ${initialShadowSkew}deg)`;
        after.style[transform] = `rotateY(${initialSkew}deg)`;
    }

    handleEnter( index ) {
        let { shadowScale, hoverSkew, hoverShadowSkew } = this.state;
        let [ before, _, after ] = this[index].children;
        //:TODO refactor to React-Motion spring??
        before.style[transform] = `scale(${shadowScale}, 1) skew(0deg, ${hoverShadowSkew}deg)`;
        after.style[transform] = `rotateY(${hoverSkew}deg)`;
    }

    render() {
        let { characters } = this.state;
        let { style, color } = this.props;
        let letterColor = color ? { color } : {};
        let styleParent = styles.resumeComponents.skills.skillChar;
        let styleBefore = {
            ...styles.resumeComponents.skills.charPseudo,
            ...styles.resumeComponents.skills.charBefore
        };
        let styleAfter  = {
            ...styles.resumeComponents.skills.charPseudo,
            ...styles.resumeComponents.skills.charAfter,
            ...letterColor
        };
        return (
            <div className="skill" style={{ ...styles.resumeComponents.skills.skillContainer, ...style}}>
                {characters.map((char, idx) => {
                    let index = `${char}-${idx}`;
                    let key = `${this.props.skill}-${idx}`;
                    return (
                        <span
                            key={key}
                            style={styleParent}
                            onMouseEnter={ () => this.handleEnter(index) }
                            onMouseLeave={ () => this.handleLeave(index) }
                            ref={ ref => { this[index] = ref; } }>
                            <span style={styleBefore}>{ char }</span>
                            <span>{ char }</span>
                            <span style={styleAfter}>{ char }</span>
                        </span>
                    );
                })}
            </div>
        );
    }

}

export default Skill;
