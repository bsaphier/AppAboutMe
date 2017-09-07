import React, { Component }        from 'react';
import { RRWAEngine }              from 'react-redux-webaudio';
import Footer                      from './Footer';
import SectionFoot                 from './SectionFoot';
import WelcomeTitle                from './WelcomeTitle';
import ResumeComponents            from './resumeComponents';
import { Section, FillSection }    from './displayComponents';
import { SML, MED, LRG, PRT, LND } from '../constants';
import { sml, med, lrg, prt, lnd } from '../styles';


// this gets toggled when componentDidMount gets called, to ensure multiple DOM
// listeners are not created. necessary?
let mounted = false;

const INIT_STATE = {
    sectionOffsetTop: {
        home: 0,
        about: 0,
        projects: 0,
        skills: 0
    }
};

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = INIT_STATE;
        this.scroll = this.scroll.bind(this);
        this.burgerToggle = this.burgerToggle.bind(this);
        this.onMediaChange = this.onMediaChange.bind(this);
        this.getSectionOffsets = this.getSectionOffsets.bind(this);

        /** window size, for styling **/
        this.sml = sml;
        this.med = med;
        this.lrg = lrg;
        this.prt = prt;
        this.lnd = lnd;
        this.resizeSML = this.onMediaChange(SML);
        this.resizeMED = this.onMediaChange(MED);
        this.resizeLRG = this.onMediaChange(LRG);
        this.resizePRT = this.onMediaChange(PRT);
        this.resizeLND = this.onMediaChange(LND);
    }

    componentDidMount() {
        this.props.toggleWelcome();
        if (!mounted) {
            window.addEventListener( 'scroll', this.scroll );
            this.sml.addListener(this.resizeSML);
            this.med.addListener(this.resizeMED);
            this.lrg.addListener(this.resizeLRG);
            this.prt.addListener(this.resizePRT);
            this.lnd.addListener(this.resizeLND);
            mounted = true;
            this.getSectionOffsets();
        }
    }

    componentWillUnmount() {
        if (mounted) {
            window.removeEventListener( 'scroll', this.scroll );
            this.sml.removeListener(this.resizeSML);
            this.med.removeListener(this.resizeMED);
            this.lrg.removeListener(this.resizeLRG);
            this.prt.removeListener(this.resizePRT);
            this.lnd.removeListener(this.resizeLND);
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
                        this.props.closeBurger();
                        this.props.resizePRT();
                    }
                };
            case LND:
                return ({ matches }) => {
                    if (matches) {
                        this.props.openBurger();
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
            if (this.sml.matches) { this.resizeSML(this.sml); }
            if (this.med.matches) { this.resizeMED(this.med); }
            if (this.lrg.matches) { this.resizeLRG(this.lrg); }
            if (this.prt.matches) { this.resizePRT(this.prt); }
            if (this.lnd.matches) { this.resizeLND(this.lnd); }
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
        const { siteInfo, contact, resume: { about, skills, projects }, ...props } = this.props;
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
                    projects={projects}
                    burgerToggle={this.burgerToggle}
                    {...props} />
                <Footer />
            </main>
        );
    }

}
