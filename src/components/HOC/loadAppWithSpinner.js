import React from 'react';

import Preload from '../Preload';


// this is a curried HOC to make the "fetchAction" modular
// it receives a callback (action) used to load the component  --which is passed to the returning
// function
const loadAppWithSpinner = (fetchAction) => {

  const loadAppWithSpinnerHOC = (Component) => {

    const _loadComponent = ({ isLoading, ...props }) => {

      if (isLoading) {

        // fake delay to test loading animation
        setTimeout(fetchAction, 500);

        // only call the "fetchAction" once
        fetchAction = () => {};
      }

      return isLoading
        ? <Preload />
        : <Component {...props} />;

    };

    return _loadComponent;
  };

  return loadAppWithSpinnerHOC;
};


export default loadAppWithSpinner;
