import React from 'react';
import { Paper } from 'material-ui';

const style = {
  height: '62vh',
  width: '20vw',
  margin: 20,
  marginTop: 68,
  textAlign: 'center',
  display: 'inline-block',
};

const About = ({ content }) => {
  return (
    <section id="about">
      <Paper style={style} zDepth={1} rounded={false}>
        <a className="smoothscroll" href="#work">
          <h1 className="shadow">
            {content.text}
          </h1>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Paper>
    </section>
  );
};

export default About;
