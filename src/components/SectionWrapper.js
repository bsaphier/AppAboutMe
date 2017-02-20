import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const SectionWrapper = ({ children, location }) => (
  <div className="section-container">
    <ReactCSSTransitionGroup
      transitionName="appear"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {React.cloneElement(
        children,
        {key: `${location.pathname}`}
      )}
    </ReactCSSTransitionGroup>
  </div>
);

export default SectionWrapper;
