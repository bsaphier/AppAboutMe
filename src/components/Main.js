import React, { Component }     from 'react';
import { RRWAEngine }           from 'react-redux-webaudio';
import Footer                   from './Footer';
import SectionFoot              from './SectionFoot';
import WelcomeTitle             from './WelcomeTitle';
import ResumeComponents         from './resumeComponents';
import { Section, FillSection } from './displayComponents';
import { SML, MED, LRG, PRT, LND } from '../constants';


let mounted = false;

const INIT_STATE = {
    sectionOffsetTop: {
        home: 0,
        about: 0,
        projects: 0,
        skills: 0
    }
};


/*
 * CSS media queries
 */
const sml = window ? window.matchMedia('screen and (max-width: 899px) and (min-width: 500px)') : null;
const med = window ? window.matchMedia('screen and (max-width: 1299px) and (min-width: 900px)') : null;
const lrg = window ? window.matchMedia('screen and (min-width: 1300px)') : null;
const prt = window ? window.matchMedia(`only screen and (min-device-width: 299px)
                                        and (max-device-width: 749px)
                                        and (-webkit-min-device-pixel-ratio: 2)
                                        and (orientation: portrait)`) : null;
const lnd = window ? window.matchMedia(`only screen and (min-device-width: 299px)
                                        and (max-device-width: 749px)
                                        and (-webkit-min-device-pixel-ratio: 2)
                                        and (orientation: landscape)`) : null;


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = INIT_STATE;
        this.scroll = this.scroll.bind(this);
        this.burgerToggle = this.burgerToggle.bind(this);
        this.onMediaChange = this.onMediaChange.bind(this);
        this.getSectionOffsets = this.getSectionOffsets.bind(this);
        this.resizeSML = this.onMediaChange(SML).bind(this);
        this.resizeMED = this.onMediaChange(MED).bind(this);
        this.resizeLRG = this.onMediaChange(LRG).bind(this);
        this.resizePRT = this.onMediaChange(PRT).bind(this);
        this.resizeLND = this.onMediaChange(LND).bind(this);
    }

    componentDidMount() {
        this.props.toggleWelcome();
        if (!mounted) {
            window.addEventListener( 'scroll', this.scroll );
            sml.addListener(this.resizeSML);
            med.addListener(this.resizeMED);
            lrg.addListener(this.resizeLRG);
            prt.addListener(this.resizePRT);
            lnd.addListener(this.resizeLND);
            mounted = true;
            this.getSectionOffsets();
        }
        /**************REMOVE**************/
        console.log(this.props.mediaSize);
        /**********************************/
    }

    componentWillUnmount() {
        if (mounted) {
            window.removeEventListener( 'scroll', this.scroll );
            sml.removeListener(this.resizeSML);
            med.removeListener(this.resizeMED);
            lrg.removeListener(this.resizeLRG);
            prt.removeListener(this.resizePRT);
            lnd.removeListener(this.resizeLND);
            mounted = false;
        }
    }

    onMediaChange( mediaType ) {
        switch (mediaType) {
            case SML:
                return ({ matches }) => {
                    if (matches) {
                        this.props.closeBurger();
                        this.props.resizeSML();
                    }
                };
            case MED:
                return ({ matches }) => {
                    if (matches) {
                        this.props.closeBurger();
                        this.props.resizeMED();
                    }
                };
            case LRG:
                return ({ matches }) => {
                    if (matches) {
                        this.props.openBurger();
                        this.props.resizeLRG();
                    }
                };
            case PRT:
                return ({ matches }) => {
                    if (matches) {
                        this.props.openBurger();
                        this.props.resizePRT();
                    }
                };
            case LND:
                return ({ matches }) => {
                    if (matches) {
                        this.props.closeBurger();
                        this.props.resizeLND();
                    }
                };
            default:
                break;
        }
    }

    getSectionOffsets() {
        if (mounted) {
            let aboutY = document.getElementById('about').offsetTop;
            let projectsY = document.getElementById('projects').offsetTop;
            let skillsY = document.getElementById('skills').offsetTop;
            this.setState({
                sectionOffsetTop: {
                    about: aboutY,
                    projects: projectsY,
                    skills: skillsY
                }});
            }
    }

    scroll({ currentTarget }) {
        let nextSection;
        let { scrollY } = currentTarget;
        let { currSection, sectionChange } = this.props;
        let { sectionOffsetTop: { about, projects } } = this.state;
        let half,
            breakA = half = about / 2,
            breakB = about + half,
            breakC = projects + half;
        if (scrollY <= breakA) {
            nextSection = 'home';
        } else if (scrollY > breakA && scrollY <= breakB) {
            nextSection = 'about';
        } else if (scrollY > breakB && scrollY <= breakC) {
            nextSection = 'projects';
        } else if (scrollY > breakC) {
            nextSection = 'skills';
        }
        if (currSection !== nextSection) {
            sectionChange( nextSection );
        }
    }

    burgerToggle( open ) {
        let { currSection, openBurger, closeBurger } = this.props;
        return open ? closeBurger(currSection) :  openBurger(currSection);
    }

    render() {
        const { panels, siteInfo, contact, resume: { about, skills, projects }, ...props } = this.props;
        return (
            <main style={{ fontFamily: '"Roboto", sans-serif' }}>
                <RRWAEngine />
                <Section id="home">
                    <FillSection>
                        <WelcomeTitle />
                        <SectionFoot to="about" text="ABOUT ME" />
                    </FillSection>
                </Section>
                <ResumeComponents
                    about={about}
                    skills={skills}
                    contact={contact}
                    siteInfo={siteInfo}
                    projects={{ projects, carouselPanels: panels}}
                    burgerToggle={this.burgerToggle}
                    {...props} />
                <Footer />
            </main>
        );
    }

}
