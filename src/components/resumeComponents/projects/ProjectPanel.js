import { connect } from 'react-redux';
import React, { Component } from 'react';
import colors from '../../../bin/colors';
import Modernizr from '../../../../.modernizrrc';
import { buttons, Cell, Title, FillSection } from '../../displayComponents';
import { int, hypote, normal as _normal } from '../../../bin/utils';
import { toggleProjectModal } from '../../../actions';
//:TODO do I really want to load the images from here??
import imgs from '../../../bin/images';
import { styles } from '../../../styles';


const  { Button } = buttons;
const transform = Modernizr.prefixed('transform');


class ProjectPanel extends Component {

    constructor( props ) {
        super(props);
        let { currPanel, project: { backgroundImg }} = props;
        this.state = {
            currPanel,
            mouseX: 0,
            mouseY: 0,
            panelWidth: 0,
            panelHeight: 0,
            parallax: Array.isArray(backgroundImg),
            parallaxVar: Array.isArray(backgroundImg) && (backgroundImg.length > 5)
        };
        this.getElement = this.getElement.bind(this);
        this.normMouseX = this.normMouseX.bind(this);
        this.normMouseY = this.normMouseY.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.createBackground = this.createBackground.bind(this);
    }

    componentDidMount() {
        window.addEventListener( 'resize', this.handleResize);
        if (this.state.parallax) {
            window.addEventListener( 'mousemove', this.handleMouseMove);
        }
    }

    componentWillUnmount() {
        window.removeEventListener( 'resize', this.handleResize);
        if (this.state.parallax) {
            window.removeEventListener( 'mousemove', this.handleMouseMove);
        }
    }

    normMouseX( value ) {
        let { panelWidth } = this.state;
        let norm = _normal(panelWidth, 0, (panelWidth / 2), (-1 * (panelWidth / 2)));
        return norm(value);
    }

    normMouseY( value ) {
        let { panelHeight } = this.state;
        let norm = _normal(panelHeight, 0, (panelHeight / 2), (-1 * (panelHeight / 2)));
        return norm(value);
    }

    handleMouseMove( event ) {
        let { clientX, clientY } = event;
        // maps mouse pos relative to the center of the panelcoordinates of the mouse, relative to
        // the size of the panel
        let mouseX = this.normMouseX(clientX);
        let mouseY = this.normMouseY(clientY);
        this.setState(() => ({ mouseX, mouseY }));
    }

    handleResize() {
        let { offsetWidth, offsetHeight } = this.domNode;
        this.setState(() => ({
            panelWidth: offsetWidth,
            panelHeight: offsetHeight
        }));
    }

    // create a refrence to a DOM node to listen for mouseMove
    getElement( ref ) {
        this.domNode = ref;
        this.setState(() => ({
            panelWidth: ref.offsetWidth,
            panelHeight: ref.offsetHeight
        }));
    }

    //:TODO don't return the entire element instead just modify the style. as it is, the entire
    // element update on mouse movement
    createBackground() {
        let { project: { backgroundImg } } = this.props;
        let { mouseX, mouseY, parallax, parallaxVar, panelWidth, panelHeight } = this.state;
        // the maxDistance is the distance from the center to the corner of the panel
        let maxDistance = hypote(panelWidth, panelHeight);
        // the distance of the mouse, from the center of the panel, as a cartesian coordinate
        let distance = hypote(mouseX, mouseY);
        let perspective = int(panelWidth  * 500 / panelHeight);
        const backgroundStyle = (parallax)
            ? {
                ...styles.resumeComponents.projects[ parallaxVar ? 'parallaxWrapB' : 'parallaxWrapA' ],
                WebkitPerspective: `${perspective}px`,
                MozPerspective: `${perspective}px`,
                OPerspective: `${perspective}px`,
                perspective: `${perspective}px`,
            }
            : {
                ...styles.resumeComponents.projects.backgroundFlat,
                backgroundImage: `url(${imgs[backgroundImg]})`
            };

        return (parallax)
            ? (<div className="parallax-mouse" style={backgroundStyle}>
                {backgroundImg.map( (fileName, i) => {
                    const  layer = i + 1;
                    const position = (parallaxVar) ? { left: -110 } : { left: 40 };
                    const translateZ = (parallaxVar)
                    ? (distance / maxDistance) * (layer * -40)
                    : 2 * distance / maxDistance * Math.sqrt(perspective * layer);
                    const rotateY = (mouseX * -1) / panelWidth * layer;
                    const rotateX = mouseY / (panelHeight * layer);
                    const parallaxDivStyle = {
                        ...styles.resumeComponents.projects.parallaxDiv,
                        ...position,
                        zIndex: layer,
                        [transform]: `
                        translateZ(${translateZ}px)
                        rotateY(${rotateY}deg)
                        rotateX(${rotateX}deg)`
                    };
                    return (
                        <div key={`bg-layer-${+i}-${fileName}`} style={parallaxDivStyle}>
                            <img src={imgs[fileName]} alt={fileName} height={panelHeight * 1.1} />
                        </div>
                    );
                })}
            </div>)
            : (<div style={backgroundStyle} />);
    }

    render() {
        let { toggleModal, project: { title, shortDescription } } = this.props;
        const bg = this.createBackground();
        return (
            <FillSection className="project-panel" style={{padding: 0}}>
                <div className="background" ref={this.getElement} style={styles.resumeComponents.projects.background}>
                    { bg }
                </div>
                <Cell style={styles.resumeComponents.projects.banner}>
                    <div>
                        <Title style={styles.resumeComponents.projects.title}>
                            <span style={styles.resumeComponents.projects.titleShadow}>{ title }</span>
                            <span>{ title }</span>
                        </Title>
                        <div style={styles.resumeComponents.projects.projectDescription}>{ shortDescription }</div>
                        <div style={styles.resumeComponents.projects.buttonWrap}>
                            <div style={{padding: '10px 5px'}}>
                                <Button title="More Info" onClick={toggleModal} style={{background: colors.AMETHYST}}>
                                    {'More Info'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Cell>
            </FillSection>
        );
    }

}

const mapStateToProps = ({ carousel: { currPanel } }) => ({ currPanel });
const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleProjectModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPanel);
