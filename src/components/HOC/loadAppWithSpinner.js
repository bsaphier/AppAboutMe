import React from 'react';

import Spinner from '../Spinner';


// curried HOC to make the "fetchAction" modular
const loadAppWithSpinner = (fetchAction) => {

  const loadAppWithSpinnerHOC = (Component) => {
    const _loadComponent = ({ isLoading, ...props }) => {

      // fake delay to test loading animation
      if (isLoading) {
        (() => setTimeout(fetchAction, 1000))();
      }

      return isLoading
        ? <Spinner />
        : <Component {...props} />;

    };

    return _loadComponent;
  };

  return loadAppWithSpinnerHOC;
};


export default loadAppWithSpinner;
