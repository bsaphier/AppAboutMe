import React from 'react';
import paper from 'paper';
import paperSketch from '../paper';

const styles = {
  paperCanvas: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};


class PaperWrapper extends React.Component {

  componentDidMount () {
    // set up paperjs on the window
    this.canvas = this.wrapper;
    paper.setup(this.canvas);
  }

  componentWillReceiveProps (newProps) {
    paperSketch(newProps);
    // if ( this.canvas.paperCanvasUpdate ) {
    //   this.canvas.paperCanvasUpdate(newProps);
    // }
  }

  render() {
    return (
        <canvas
          style={styles.paperCanvas}
          ref={wrapper => this.wrapper = wrapper}
          data-paper-resize
        />
    );
  }
}

export default PaperWrapper;
