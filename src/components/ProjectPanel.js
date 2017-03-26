import React, { Component } from 'react';

import { Cell, Title, Button, FillSection } from './displayComponents';


const styles = {
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(127, 255, 212, 0.95)'
  },
  backgroundBlur: {
    // boolean will include these styles
  },
  banner: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '33.33%',
    background: 'rgba(45, 45, 45, 0.3)',

    WebkitTransform: '-webkit-translate(-50%, -50%)',
    MozTransform: '-moz-translate(-50%, -50%)',
    OTransform: '-o-translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  bannerInfo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',

    WebkitTransform: '-webkit-translate(-50%, -50%)',
    MozTransform: '-moz-translate(-50%, -50%)',
    OTransform: '-o-translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  titleMain: {
    display: 'block',
    textAlign: 'inherit'
  }
};


class ProjectPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { viewModal: false };
    this.toggleModal = this.toggleModal.bind(this);
  }


  toggleModal() {
    this.setState({ viewModal: !this.state.viewModal });
  }


  render() {
    const {
      style,
      backgroundImg,
      project: { date, link, title, description }
    } = this.props;

    // const myContributions = description.map( (bullet, idx) => (
    //   <li key={`projectDescription${+idx}`}>{ bullet }</li>
    // ));

    return (
      <FillSection style={{padding: 0}}>

        <div style={{...styles.background, backgroundImage: backgroundImg}} />

        <Cell>
          <div style={styles.banner}>
            <div style={styles.bannerInfo}>
              <Title style={style.title} parentStyle={styles.titleMain}>
                <span>{ title }</span>
              </Title>
              <div>{ date }</div>
              <a href={link} title={`Link To ${title}`}>
                <Button>Click me to check out this project!</Button>
              </a>
              {/* <div onClick={this.toggleModal}>
                <span>My Contributions To This Project</span>
              </div> */}
            </div>
          </div>

          {/* <BorderGrad style={styles.banner}>
            <div style={{...style.text, padding: 0}}>
              { this.state.viewModal ? myContributions : shortDescription }
            </div>
          </BorderGrad> */}
        </Cell>

      </FillSection>
    );
  }
}

export default ProjectPanel;
