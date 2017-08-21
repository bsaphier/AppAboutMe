import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import carouselPanel from './carouselPanel';
import Modernizr from '../../../.modernizrrc';
import { createCarousel, rotateCarousel, resizeCarousel } from '../../actions';
import { buttons } from '../displayComponents';
import { styles } from '../../styles';
import { clickSpin } from '../HOC';


const transform = Modernizr.prefixed('transform');
const { IconButton } = buttons;

let created = false;

// panels passed in here must be an array of valid React components. navButtons (optional) can
// be a valid React component or an array of two valid React components. If navButtons is an
// array, only the first two indexes will be used
const carousel3D = (panels, navButtons) => {

    class Carousel3D extends Component {

        constructor( props ) {
            super(props);
            // this.getSize = this.getSize.bind(this);
            this.getElement = this.getElement.bind(this);
            this.getPanelIndex = this.getPanelIndex.bind(this);
            this.createNavButton = this.createNavButton.bind(this);
            this.navButtonAction = this.navButtonAction.bind(this);
        }

        componentDidMount() {
            let { create, axis, resize } = this.props;
            let size = this.domNode[axis === 'Y' ? 'offsetWidth' : 'offsetHeight'];
            if (!created) {
                create(panels.length, size);
                created = true;
            }
            window.addEventListener( 'resize', function() {
                resize(panels.length, size);
            });
        }

        componentWillUnmount() {
            let { axis, resize } = this.props;
            let size = this.domNode[axis === 'Y' ? 'offsetWidth' : 'offsetHeight'];
            window.removeEventListener( 'resize', function() {
                resize(panels.length, size);
            });
        }

        // // get the size of the carousel DOM node
        // getSize( axis ) {
        //   return this.domNode[axis === 'Y' ? 'offsetWidth' : 'offsetHeight'];
        // }

        // create a refrence to the DOM node to listen for windowResize
        getElement( ref ) {
            this.domNode = ref;
        }

        // get the new panel's index
        getPanelIndex( dir ) {
            let nextPanel = (this.props.currPanel + dir) % panels.length;
            return nextPanel >= 0 ? nextPanel : panels.length - nextPanel * -1;
        }

        // navButton helper function
        navButtonAction( dir ) {
            let { theta, rotate, rotation } = this.props;
            let newRotation = rotation + theta * ( (dir) ? 1 : -1 );
            rotate(newRotation, this.getPanelIndex( (dir) ? -1 : 1) );
        }

        //:TODO move the navButtons to the parent component for easier modularity and creating the
        //:TODO buttons here cause them to rerender along with the entire carousel
        // a default navButton generator for moving the carousel left/right
        createNavButton( back ) {
            // the default navButton
            const ClickSpin = clickSpin(IconButton);
            let left = (back) ? 5 : 95;
            let dir = (back) ? 90 : -90;
            return () => (
                <div
                    className="nav-button"
                    style={{ ...styles.buttonWrap, left: `${left}%` }}
                    onClick={() => this.navButtonAction( back )}>
                    <ClickSpin
                        icon="angle-down"
                        initialColor={[45, 45, 45, 0.62]}
                        clickColor={[255, 68, 62, 1]}
                        style={{
                            fontSize: '4.2rem',
                            [transform]: `rotate(${dir}deg)`,
                            backgroundColor: 'transparent'
                        }} />
                </div>
            );
        }

        render() {
            let { axis, theta, radius, rotation } = this.props;
            const NavBack = this.createNavButton(true);
            const NavFwd = this.createNavButton(false);
            return (
                <div className="carousel-container" style={styles.container}>
                    <NavBack />
                    <Motion style={{ degree: spring(rotation, presets.wobbly) }}>
                        {({ degree }) => (
                            <div
                                className="carousel"
                                ref={this.getElement}
                                style={{
                                    ...styles.carousel,
                                    [ transform ]: `translateZ(-${radius}px) rotate${axis}(${degree}deg)`
                                }}>
                                { panels.map( (Panel, idx) =>
                                    carouselPanel({ idx, axis, theta, radius })(Panel)
                                )}
                            </div>
                        )}
                    </Motion>
                    <NavFwd />
                </div>
            );
        }
    }

    const mapStateToProps = ({ carousel: { axis, theta, radius, rotation, panelSize, currPanel } }) => ({
        axis,
        theta,
        radius,
        rotation,
        panelSize,
        currPanel
    });

    const mapDispatchToProps = dispatch => ({
        create: (panelCount, panelSize) => dispatch(createCarousel(panelCount, panelSize)),
        rotate: (newRotation, currPanel) => dispatch(rotateCarousel(newRotation, currPanel)),
        resize: (panelsCount, panelSize) => dispatch(resizeCarousel(panelsCount, panelSize)),
    });

    return connect(mapStateToProps, mapDispatchToProps)(Carousel3D);
};


export default carousel3D;
