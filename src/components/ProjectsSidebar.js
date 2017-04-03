import React from 'react';
import { connect } from 'react-redux';

import {
  Cell,
  Title,
  Divider,
  SideSection
} from './displayComponents';
import { rotateCarousel } from '../actions';


const ProjectsSidebar = ({ style, rotate, theta, content, rotation, currPanel }) => {

    const getPanelDistance = index => {
      return currPanel > index
        ? currPanel - index
        : index - currPanel;
    };

    const getNewRotation = index => (rotation + theta * getPanelDistance(index)) % 360;


    const sidebarItems = content.map( (project, idx) => (
      <div
        key={`projects-sidebar-item-${project.index}`}
        onClick={() => rotate(getNewRotation(idx), idx)}
        >
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

        <Cell style={{height: '62%', textAlign: 'left'}}>
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
