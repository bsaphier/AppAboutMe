import { Motion } from 'react-motion';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Modernizr from '../../.modernizrrc';
import { TitleText } from './displayComponents';
import { welcome as motion } from '../motion';
import { toggleWelcome } from '../actions';


const transform = Modernizr.prefixed('transform');


const styles = {
  cell: {
    position: 'absolute',
    left: '50%',

    willChange: 'transform',
    WebkitTransform: 'translate(-50%, -50%)',
    [transform]: 'translate(-50%, -50%)',
  }
};


class WelcomeTitle extends Component {

  constructor(props) {
    super(props);

    this.state = { motion: motion.initial };

    this.leave = this.leave.bind(this);
    this.hover = this.hover.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.welcomeIn && nextProps.currSection === 'home') {
      this.setState({ motion: motion.enter });
    }
  }

  hover(id) {
    this.setState({ motion: { ...motion.enter, [id]: motion.exit[id] }});
  }

  leave(id) {
    this.setState({ motion: {...motion.enter, [id]: motion.enter[id] }});
  }

  render() {

    //*TODO create title components by iterating instead of hard-coded
    return (
      <Motion style={this.state.motion}>
        {(interpStyle) => (
          <div id="welcome" style={{...styles.cell, top: `${interpStyle.top}%`}}>
            <TitleText
              hover={this.hover}
              leave={this.leave}
              id="letterSpacing0"
              style={{
                  fontWeight: 500,
                  fontSize: 'calc(3.8 * 4.275vmin)',
                  lineHeight: '0.7em',
                  paddingTop: '0.06em',
                  paddingRight: '0.1em',
                  paddingLeft: '0.05em',
                  letterSpacing: `${interpStyle.letterSpacing0}em`
                }}>
              Hello
            </TitleText>
            <TitleText
              hover={this.hover}
              leave={this.leave}
              id="letterSpacing1"
              style={{
                fontWeight: 100,
                fontSize: 'calc(3.8 * 1.6vmin)',
                lineHeight: '0.8em',
                paddingTop: '0.06em',
                paddingLeft: '0.15em',
                letterSpacing: `${interpStyle.letterSpacing1}em`
              }}>
              My name is
            </TitleText>
            <TitleText
              hover={this.hover}
              leave={this.leave}
              id="letterSpacing2"
              style={{
                fontWeight: 900,
                fontSize: 'calc(3.8 * 6.89vmin)',
                lineHeight: '0.7em',
                paddingTop: '0.03em',
                paddingRight: '0.06em',
                paddingBottom: '0.01em',
                letterSpacing: `${interpStyle.letterSpacing2}em`
              }}>
              <b style={{letterSpacing: `${interpStyle.letterSpacing2 - 0.035}em`}}>B</b>en
            </TitleText>
            <TitleText
              hover={this.hover}
              leave={this.leave}
              id="letterSpacing3"
              style={{
                fontWeight: 100,
                fontSize: 'calc(3.8 * 3.5vmin)',
                fontStyle: 'italic',
                lineHeight: '0.8em',
                paddingRight: '0.1em',
                letterSpacing: `${interpStyle.letterSpacing3}em`
              }}>
              Saphier
            </TitleText>
            <TitleText
              hover={this.hover}
              leave={this.leave}
              id="letterSpacing4"
              style={{
                fontWeight: 900,
                fontSize: 'calc(3.8 * 1vmin)',
                lineHeight: '0.9em',
                wordSpacing: '-0.05em',
                paddingTop: '0.07em',
                paddingRight: '0.103em',
                letterSpacing: `${interpStyle.letterSpacing4}em`
              }}>
              I'm a software engineer
            </TitleText>
            <TitleText
              hover={this.hover}
              leave={this.leave}
              id="letterSpacing5"
              style={{
                fontWeight: 100,
                fontSize: 'calc(3.8 * 1.91vmin)',
                lineHeight: '0.9em',
                paddingRight: '0.175em',
                letterSpacing: `${interpStyle.letterSpacing5}em`
              }}>
              Exploring the
            </TitleText>
            <TitleText
              hover={this.hover}
              leave={this.leave}
              id="letterSpacing6"
              style={{
                fontWeight: 400,
                fontSize: 'calc(3.8 * 1.3vmin)',
                lineHeight: '0.7em',
                paddingTop: '0.08em',
                paddingRight: '0.13em',
                paddingBottom: '0.03em',
                letterSpacing: `${interpStyle.letterSpacing6}em`
              }}>
              crossover between
            </TitleText>
            <TitleText
              hover={this.hover}
              leave={this.leave}
              id="letterSpacing7"
              style={{
                fontWeight: 100,
                fontSize: 'calc(3.8 * 2vmin)',
                lineHeight: '1em',
                paddingRight: '0.2em',
                letterSpacing: `${interpStyle.letterSpacing7}em`
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
  toggleWelcome: () => dispatch(toggleWelcome())
});


export default connect(mapStateToProps, mapDispatchToProps)(WelcomeTitle);
