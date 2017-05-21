import React from 'react';

import Preload from '../Preload';


const loadAppWithSpinner = (Component) => {

  let loaded = false;

  return ({ isLoading, ...props }) => {

    if (isLoading && !loaded) {

      // fake delay to test loading animation
      setTimeout(props.fetchData, 500);

      // only call the "fetchAction" once
      loaded = true;
    }

    return isLoading
    ? <Preload />
    : <Component {...props} />;

  };

};


export default loadAppWithSpinner;
