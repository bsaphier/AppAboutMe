import { connect } from 'react-redux';
import React, { Component } from 'react';


const styles = {
  before: {
    height: '50vh',
    margin: '0',
    textAlign: 'center',
    display: 'inline-block'
  },
  header: {
    overflow: 'hidden',
    minHeight: '500px',
    textAlign: 'center',
    position: 'relative'
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
    return window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    return window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const style = {
      overflow: 'hidden',
      minHeight: '500px',
      textAlign: 'center',
      position: 'relative',
      width: this.state.window.width,
      height: this.state.window.height
    };

    return (
      <header id={this.props.id} style={style}>
        <div style={styles.before} />
        { this.props.children }
      </header>
    );
  }
}

export default connect()(Header);
