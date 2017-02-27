import { connect } from 'react-redux';
import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
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

  updateDimensions() {
    return this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    const styles = {
      before: {
        margin: '0',
        height: '50vh',
        textAlign: 'center',
        display: 'inline-block'
      },
      window: {
        overflow: 'hidden',
        minHeight: '500px',
        textAlign: 'center',
        position: 'relative',
        width: this.state.width,
        height: this.state.height
      }
    };

    return (
      <header id={this.props.id} style={styles.window}>
        <div style={styles.before} />
        { this.props.children }
      </header>
    );
  }
}

export default connect()(Header);
