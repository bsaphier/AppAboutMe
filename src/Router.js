import {
  Route,
  BrowserRouter,
} from 'react-router-dom';
import React from 'react';

import Main from './components/Main';

// this tells webpack to include all the Sass styling
require('./stylesheets/main.scss');

// const styles = {
//   fill: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0
//   }
// };

const Router = () => (
  <BrowserRouter basename="/my-site">
    <Route component={Main} />
  </BrowserRouter>
);

export default Router;

/*
const AnimationExample = () => (
  <BrowserRouter>
    <div style={styles.fill}>
      <ul style={styles.nav}>
        <NavLink to="/10/90/50">Red</NavLink>
        <NavLink to="/120/100/40">Green</NavLink>
        <NavLink to="/200/100/40">Blue</NavLink>
        <NavLink to="/310/100/50">Pink</NavLink>
      </ul>

      <div style={styles.content}>
        <FadeRoute path="/:h/:s/:l" component={HSL} />
      </div>

      <Route exact path="/" render={() => (
        <Redirect to="/10/90/50" />
      )} />
    </div>
  </BrowserRouter>
);

const FadeRoute = ({ component: Component, ...rest }) => {
  const willLeave = () => ({ zIndex: 1, opacity: spring(0) })

  return (
    <Route {...rest} children={({ location, match }) => (
      <TransitionMotion
        willLeave={willLeave}
        styles={match ? [ {
          key: location.pathname,
          style: { opacity: 1 },
          data: match
        } ] : []}
      >
        {interpolatedStyles => (
          <div>
            {interpolatedStyles.map(config => (
              <div
                key={config.key}
                style={{ ...styles.fill, ...config.style }}
              >
                <Component {...config.data} />
              </div>
            ))}
          </div>
        )}
      </TransitionMotion>
    )} />
  );
};

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }} />
  </li>
);

const HSL = ({ params }) => (
  <div style={{
    ...styles.hsl,
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
);
*/
