import React from 'react';
import { connect } from 'react-redux';

import { rotateCarousel } from '../actions';
import { buttons, Cell, Title, Divider, SideSection } from './displayComponents';
const { SidebarButton } = buttons;

const ProjectsSidebar = ({ style, rotate, theta, content, rotation, currPanel }) => {

    const getPanelMovement = index => {
      let { length } = content;

      // proper modulus math...
      let forwards = (((currPanel - index) % length) + length) % length;
      let backwards = (((index - currPanel) % length) + length) % length;

      return backwards > forwards ? forwards : backwards * -1;
    };


    const getNewRotation = index => rotation + theta * getPanelMovement(index);


    const sidebarItems = content.map( (project, idx) => {
      let navigate = () => {
        if (currPanel !== idx) rotate(getNewRotation(idx), idx);
      };

      return (
        <div
          key={`projects-sidebar-item-${project.index}`}
          onClick={navigate}
          style={{ margin: '15px auto' }}>
            <SidebarButton>
              <Title style={{ fontSize: '1.1rem' }}>
                <span>{ project.title }</span>
              </Title>
            </SidebarButton>
        </div>
      );
    });


    return (
      <SideSection title="Projects">
        <Title style={{
          ...style.title,
          fontSize: '3rem',
          letterSpacing: '-0.05em'
        }}>
          <span>Projects</span>
        </Title>

        <Divider />
        {/* <Cell style={{height: '5%'}} /> */}
        <Cell style={{height: '66%', overflow: 'visible'}}>
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
