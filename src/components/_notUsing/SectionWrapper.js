import React from 'react';

const SectionWrapper = ({ children, location }) => (
  <div>
    {React.cloneElement(
      children,
      {key: `${location.pathname}`}
    )}
  </div>
);

export default SectionWrapper;
