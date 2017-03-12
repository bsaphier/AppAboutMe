import React from 'react';
import { connect } from 'react-redux';
import { Motion, presets, spring } from 'react-motion';

import { Cell, Title } from './displayComponents';


const Welcome = ({ welcomeIn, currSection }) => {

  let titleIn = (welcomeIn && currSection === 'home')
    ? {
        top: spring(8, presets.stiff),
        letterSpacing0: spring(-0.03, presets.gentle),
        letterSpacing1: spring(0.25, presets.gentle),
        letterSpacing2: spring(-0.06, presets.wobbly),
        letterSpacing3: spring(-0.08, presets.gentle),
        letterSpacing4: spring(-0.05, presets.gentle),
        letterSpacing5: spring(-0.1, presets.gentle)
      }
    : {
        top: -50,
        letterSpacing0: 3,
        letterSpacing1: 2,
        letterSpacing2: 6,
        letterSpacing3: 8,
        letterSpacing4: 5,
        letterSpacing5: 1
      };

  //*TODO create title components by iterating instead of inline
  return (
    <Motion style={titleIn}>
      {(interpStyle) => (
        <Cell style={{paddingTop: `${interpStyle.top}%`}}>
          <Title style={{
            fontWeight: 500,
            fontSize: '14vh',
            lineHeight: '11vh',
            paddingRight: '0.07em',
            letterSpacing: `${interpStyle.letterSpacing0}em`
          }}>
            Hello
          </Title>
          <Title style={{
            fontWeight: 100,
            fontSize: '5vh',
            lineHeight: '4vh',
            letterSpacing: `${interpStyle.letterSpacing1}em`
          }}>
            My name is
          </Title>
          <Title style={{
            fontWeight: 900,
            fontSize: '23vh',
            lineHeight: '16.2vh',
            paddingTop: '0.03em',
            paddingRight: '0.1em',
            letterSpacing: `${interpStyle.letterSpacing2}em`
          }}>
            <b style={{letterSpacing: `${interpStyle.letterSpacing2 - 0.02}em`}}>B</b>en
          </Title>
          <Title style={{
            fontWeight: 100,
            fontSize: '12vh',
            fontStyle: 'italic',
            lineHeight: '9.6vh',
            paddingRight: '0.15em',
            letterSpacing: `${interpStyle.letterSpacing3}em`
          }}>
            Saphier
          </Title>
          <Title style={{
            fontWeight: 900,
            fontSize: '7vh',
            lineHeight: '5.1vh',
            wordSpacing: '-0.05em',
            paddingTop: '0.07em',
            paddingRight: '0.15em',
            letterSpacing: `${interpStyle.letterSpacing4}em`
          }}>
            I like to mix
          </Title>
          <Title style={{
            fontWeight: 100,
            fontSize: '6.66vh',
            lineHeight: '7vh',
            paddingRight: '0.2em',
            letterSpacing: `${interpStyle.letterSpacing5}em`
          }}>
            sound & code
          </Title>
        </Cell>
      )}
    </Motion>
  );
};


const mapStateToProps = ({ app }) => ({
  welcomeIn: app.welcomeIn,
  currSection: app.currSection
});

export default connect(mapStateToProps)(Welcome);
