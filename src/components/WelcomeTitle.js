import { Motion } from 'react-motion';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { TitleText } from './displayComponents';
import { welcome as motion } from '../motion';
import { playSound, toggleWelcome } from '../actions';
import { scaleFactory } from '../bin/audio-helpers';
import { styles } from '../styles';


const ROOT_IN_HZ = 220;
const BLUES_STEPS = [ 1, (6 / 5), (4 / 3), (45 / 32), (3 / 2), (9 / 5), 2 ];


class WelcomeTitle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            motion: motion.initial,
            musicScale: scaleFactory( BLUES_STEPS, ROOT_IN_HZ )
        };
        this.leave = this.leave.bind(this);
        this.hover = this.hover.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.welcomeIn && nextProps.currSection === 'home') {
            this.setState({ motion: motion.enter });
        }
    }

    hover(id, sound) {
        this.setState({ motion: { ...motion.enter, [id]: motion.exit[id] }});
        this.props.playSound( sound );
    }

    leave(id) {
        this.setState({ motion: {...motion.enter, [id]: motion.enter[id] }});
    }

    render() {
        //*TODO create title components by iterating instead of hard-coded
        return (
            <Motion style={this.state.motion}>
                {(interpStyle) => (
                    <div id="welcome" style={{...styles.welcomeCell, top: `${interpStyle.top}%`}}>
                        <TitleText
                            hover={this.hover}
                            leave={this.leave}
                            sound={this.state.musicScale[0]}
                            id="title0"
                            style={{
                                fontWeight: 500,
                                fontSize: 'calc(3.8 * 4.275vmin)',
                                lineHeight: '0.7em',
                                paddingTop: '0.06em',
                                paddingRight: '0.1em',
                                paddingLeft: '0.05em',
                                letterSpacing: `${interpStyle.title0}em`
                            }}>
                            Hello
                        </TitleText>
                        <TitleText
                            hover={this.hover}
                            leave={this.leave}
                            sound={this.state.musicScale[2]}
                            id="title1"
                            style={{
                                fontWeight: 100,
                                fontSize: 'calc(3.8 * 1.6vmin)',
                                lineHeight: '0.8em',
                                paddingTop: '0.06em',
                                paddingLeft: '0.15em',
                                letterSpacing: `${interpStyle.title1}em`
                            }}>
                            My name is
                        </TitleText>
                        <TitleText
                            hover={this.hover}
                            leave={this.leave}
                            sound={this.state.musicScale[1]}
                            id="title2"
                            style={{
                                fontWeight: 900,
                                fontSize: 'calc(3.8 * 6.89vmin)',
                                lineHeight: '0.7em',
                                paddingTop: '0.03em',
                                paddingRight: '0.06em',
                                paddingBottom: '0.01em',
                                letterSpacing: `${interpStyle.title2}em`
                            }}>
                            <b style={{letterSpacing: `${interpStyle.title2 - 0.035}em`}}>B</b>en
                        </TitleText>
                        <TitleText
                            hover={this.hover}
                            leave={this.leave}
                            sound={this.state.musicScale[2]}
                            id="title3"
                            style={{
                                fontWeight: 100,
                                fontSize: 'calc(3.8 * 3.5vmin)',
                                fontStyle: 'italic',
                                lineHeight: '0.8em',
                                paddingRight: '0.1em',
                                letterSpacing: `${interpStyle.title3}em`
                            }}>
                            Saphier
                        </TitleText>
                        <TitleText
                            hover={this.hover}
                            leave={this.leave}
                            sound={this.state.musicScale[3]}
                            id="title4"
                            style={{
                                fontWeight: 900,
                                fontSize: 'calc(3.8 * 1vmin)',
                                lineHeight: '0.9em',
                                wordSpacing: '-0.05em',
                                paddingTop: '0.07em',
                                paddingRight: '0.103em',
                                letterSpacing: `${interpStyle.title4}em`
                            }}>
                            I'm a software engineer
                        </TitleText>
                        <TitleText
                            hover={this.hover}
                            leave={this.leave}
                            sound={this.state.musicScale[4]}
                            id="title5"
                            style={{
                                fontWeight: 100,
                                fontSize: 'calc(3.8 * 1.91vmin)',
                                lineHeight: '0.9em',
                                paddingRight: '0.175em',
                                letterSpacing: `${interpStyle.title5}em`
                            }}>
                            Exploring the
                        </TitleText>
                        <TitleText
                            hover={this.hover}
                            leave={this.leave}
                            sound={this.state.musicScale[5]}
                            id="title6"
                            style={{
                                fontWeight: 400,
                                fontSize: 'calc(3.8 * 1.3vmin)',
                                lineHeight: '0.7em',
                                paddingTop: '0.08em',
                                paddingRight: '0.13em',
                                paddingBottom: '0.03em',
                                letterSpacing: `${interpStyle.title6}em`
                            }}>
                            crossover between
                        </TitleText>
                        <TitleText
                            hover={this.hover}
                            leave={this.leave}
                            sound={this.state.musicScale[6]}
                            id="title7"
                            style={{
                                fontWeight: 100,
                                fontSize: 'calc(3.8 * 2vmin)',
                                lineHeight: '1em',
                                paddingRight: '0.2em',
                                letterSpacing: `${interpStyle.title7}em`
                            }}>
                            Sound & Code
                        </TitleText>
                    </div>
                )}
            </Motion>
        );
    }

}


const mapStateToProps = ({ app }) => ({
    welcomeIn: app.welcomeIn,
    currSection: app.currSection
});


const mapDispatchToProps = dispatch => ({
    playSound: (note) => dispatch( playSound(note) ),
    toggleWelcome: () => dispatch( toggleWelcome() )
});


export default connect(mapStateToProps, mapDispatchToProps)(WelcomeTitle);
