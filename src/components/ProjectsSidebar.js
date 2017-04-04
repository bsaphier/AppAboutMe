import React from 'react';
import { connect } from 'react-redux';

import { rotateCarousel } from '../actions';
import { Cell, Title, Divider, SideSection } from './displayComponents';


const ProjectsSidebar = ({ style, rotate, theta, content, rotation, currPanel }) => {

    const getPanelMovement = index => {
      let { length } = content;

      // proper modulus math...
      let forwards = (((currPanel - index) % length) + length) % length;
      let backwards = (((index - currPanel) % length) + length) % length;

      return backwards > forwards ? forwards : backwards * -1;
    };


    const getNewRotation = index => rotation + theta * getPanelMovement(index);


    const sidebarItems = content.map( (project, idx) => (
      <div
        key={`projects-sidebar-item-${project.index}`}
        onClick={() => {
          if (currPanel !== idx) rotate(getNewRotation(idx), idx);
        }}>
        <Title style={{
          fontSize: '3vh',
          letterSpacing: '-0.05em'
        }}>
          <span>{ project.title }</span>
        </Title>

        <Divider />
      </div>
    ));


    return (
      <SideSection title="Projects">
        <Title style={{
          ...style.title,
          fontSize: '6vh',
          letterSpacing: '-0.05em'
        }}>
          <span>Projects</span>
        </Title>

        <Divider />

        <Cell style={{height: '5%'}} />

        <Cell style={{height: '66%'}}>
          { sidebarItems }
        </Cell>

      </SideSection>
    );
};


const mapStateToProps = ({ carousel: { theta, currPanel, rotation } }) => ({ theta, currPanel, rotation });

const mapDispatchToProps = dispatch => ({
  rotate: (newRotation, currPanel) => dispatch(rotateCarousel(newRotation, currPanel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsSidebar);
