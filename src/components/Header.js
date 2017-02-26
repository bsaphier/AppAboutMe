import { connect } from 'react-redux';
import React, { Component } from 'react';


const styles = {
  before: {
    height: '50vh',
    margin: '0 auto',
    textAlign: 'center',
    display: 'inline-block'
  },
  header: {
    width: '100vw',
    overflow: 'hidden',
    minHeight: '500px',
    position: 'relative',
    textAlign: 'center'
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: {
        height: 0,
        width: 0
      }
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    return this.setState({
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    // I need to complement this with a componentWillUnMount
    // to remove the listener
    return window.addEventListener('resize', this.updateDimensions);
  }

  render() {
    const style = Object.assign(styles.header, {
      width: this.state.window.width,
      height: this.state.window.height
    });

    return (
      <header id={this.props.id} style={style}>
        <div style={styles.before} />
        { this.props.children }
      </header>
    );
  }
}

export default connect()(Header);
