import React from 'react';
import { connect } from 'react-redux';

import colors from '../../../bin/colors';
import { buttons, Title, Divider, SideSection } from '../../displayComponents';
import { rotateCarousel } from '../../../actions';

const  { SidebarButton } = buttons;

//:TODO do this with a helper func for modular color/blur/etc...
// text shadow for pseudo-element
let op = 1.0, textShadow = [];

for (let a = 2, b = 3, c; a <= 13; c = a, a = b, b += c) {
  textShadow.push(`${a}px ${a}px ${a}px rgba(127,90,131,${op})`);
  op -= 0.15;
}

textShadow.join(', ');


const styles = {
  sidebarButtonsWrapper: {
    display: 'flex',
    height: '62%',
    overflow: 'visible',

    alignContent: 'flex-start',

    WebkitFlexWrap: 'wrap',
    MSFlexWrap: 'wrap',
    flexWrap: 'wrap',
  },
  sidebarButton: {
    margin: '20px auto',

    WebkitFlexGrow: 1,
    flexGrow: 1,
  }
};


const ProjectsSidebar = ({ style, rotate, theta, content, rotation, currPanel }) => {
  let { length } = content;

  const getPanelMovement = index => {
    // proper modulus math...
    let forwards = (((currPanel - index) % length) + length) % length;
    let backwards = (((index - currPanel) % length) + length) % length;

    return backwards > forwards ? forwards : backwards * -1;
  };

  const getNewRotation = index => rotation + theta * getPanelMovement(index);

  const sidebarItems = content.map( (project, idx) => {
    let navigate = () => { if (currPanel !== idx) rotate(getNewRotation(idx), idx); };

    return (
      <div
        key={`sidebar-item-projects${project.index}`}
        onMouseDown={navigate}
        style={styles.sidebarButton}>

        <SidebarButton colors={{ upColor: [45, 45, 45], downColor: [ 81, 81, 81] }}>
          <Title style={{ fontSize: '1.1rem' }}>
            <span>{ project.title }</span>
          </Title>
        </SidebarButton>

      </div>
    );
  });

  return (
    <SideSection title="Projects" style={{ background: colors.AMETHYST }}>
      <Title style={style.title}>
        <span style={{ position: 'absolute', zIndex: -1, textShadow }}>Projects</span>
        <span>Projects</span>
      </Title>

      <Divider />

      <div style={styles.sidebarButtonsWrapper}>
        { sidebarItems }
      </div>
    </SideSection>
  );
};


const mapStateToProps = ({ carousel: { theta, currPanel, rotation } }) => ({ theta, currPanel, rotation });


const mapDispatchToProps = dispatch => ({
  rotate: (newRotation, currPanel) => dispatch(rotateCarousel(newRotation, currPanel))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectsSidebar);
