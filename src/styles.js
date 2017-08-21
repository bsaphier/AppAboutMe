import imgs from './bin/images';
import colors from './bin/colors';
import Modernizr from '../.modernizrrc';


const transform = Modernizr.prefixed('transform');
//:TODO do this with a helper func for modular color/blur/etc...
// text shadow for pseudo-element
let rgb = 46, op = 1.0, textShadow = [], textShadow2 = [];
for (let a = 2, b = 3, c; a <= 13; c = a, a = b, b += c) {
  textShadow2.push(`${a}px ${a}px ${a}px rgba(127,90,131,${op})`);
  op -= 0.15;
}
for (let a = 2, b = 3, c; a <= 13; c = a, a = b, b += c) {
    textShadow.push(`${a}px ${a}px ${a}px rgb(${rgb},${rgb},${rgb})`);
    rgb += 7;
}
textShadow.join(', ');
textShadow2.join(', ');


export const styles = {
    /* Resume Components */
    resumeComponents: {
        title: {
            cursor: 'default',
            margin: '0 auto 0 0',
            // fontWeight: '400',
            fontSize: '3rem',
            lineHeight: '0.9em',
            letterSpacing: '0.05em'
        },
        text: {
            cursor: 'default',
            margin: '30px 0',
            fontWeight: 900,
            fontSize: '1.1rem',
            lineHeight: '1.62em',
            letterSpacing: '-0.02rem',
        },
        /* About */
        about: {
            aboutBackground: {
                position: 'absolute',
                zIndex: 1,
                top: -20,
                left: -20,
                width: '110%',
                height: '110%',
                backgroundSize: 'cover',
                backgroundImage: `url(${imgs.spaceBg})`,
                WebkitFilter: 'blur(4px)',
                filter: 'blur(4px)',
            },
            /* About Panel */
            aboutPanel: {
                position: 'absolute',
                zIndex: 9,
                top: '50%',
                left: '48%',
                width: '50%',
                height: '38%',
                [ transform ]: 'translate(-50%, -50%)'
            },
            aboutPanelContent: {
                position: 'relative',
                zIndex: 9,
                width: '100%',
                height: '100%',
                padding: '10px 20px',
                overflow: 'scroll',
                color: colors.MENU_DARKER,
                background: '#FFF',
            },
            socialButtons: {
                display: 'inline-flex',
                justifyContent: 'space-between',
                width: '100%',
                cursor: 'default',
                margin: '15px 0 0',
                color: colors.MENU_DARK,
                fontSize: '1rem',
            },
            socialButtonWrap: {
                textAlign: 'center',
            },
            socialButtonLabel: {
                color: colors.MENU_DARKER,
                fontSize: '0.7rem',
                fontWeight: 400,
                margin: '0 auto'
            },
            // 3D shadow effect
            aboutPanelBefore: {
                zIndex: 1,
                position: 'absolute',
                left: '5px',
                bottom: '15px',
                width: '50%',
                height: '15%',
                maxHeight: '20px',
                WebkitBoxShadow: '0 15px 10px rgba(0, 0, 0, 0.38)',
                MozBoxShadow: '0 15px 10px rgba(0, 0, 0, 0.38)',
                boxShadow: '0 15px 10px rgba(0, 0, 0, 0.38)',
                [ transform ]: 'rotate(-3deg)',
            },
            aboutPanelAfter: {
                right: '5px',
                left: null,
                [ transform ]: 'rotate(3deg)',
            },
            /* About Sidebar */
            aboutSidebarContent: {
                height: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                overflow: 'hidden',
                padding: '0 1px ',
                cursor: 'default',
                fontSize: '1.1rem',
                fontWeight: '100',
                color: colors.MENU_DARKER,
            },
            aboutSidebarLabel: {
                display: 'block',
                padding: '0 1px',
                letterSpacing: '0.05rem',
                textTransform: 'uppercase'
            },
            aboutSidebarInfo: {
                display: 'block',
                padding: '0 5px',
                fontSize: '2rem',
                fontWeight: 900,
                textAlign: 'right',
                letterSpacing: '-0.1rem'
            }
        },
        /* Projects */
        projects: {
            /* Project Modal */
            modalBack: {
                position: 'absolute',
                zIndex: 10,
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                background: 'rgba(45, 45, 45, 0.75)'
            },
            modal: {
                position: 'relative',
                zIndex: 9,
                top: '49%',
                left: '50%',
                width: '50%',
                color: colors.CHINESE_VIOLET,
                [ transform ]: 'translate(-50%, -50%)',
            },
            modalContent: {
                position: 'relative',
                zIndex: 9,
                padding: '1rem 1.6rem',
                minHeight: '33.3vh',
                background: '#FFF',
                display: 'flex',
                alignContent: 'space-between',
                WebkitFlexWrap: 'wrap',
                MSFlexWrap: 'wrap',
                flexWrap: 'wrap',
            },
            modalHeader: {
                position: 'absolute',
                top: 0,
                left: 0,
                height: '2.5rem',
                width: '100%',
                whiteSpace: 'nowrap',
                padding: '1rem 1.6rem',
                color: colors.MENU_DARKER,
                background: colors.AMETHYST,
                fontStyle: 'italic',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
            modalTitle: {
                fontWeight: 600,
                fontSize: '2rem',
                alignSelf: 'center'
            },
            modalSubTitle: {
                width: '100%',
                margin: '40px 0 0',
                textAlign: 'right',
                fontSize: '1.4rem',
                fontStyle: 'italic'
            },
            modalList: {
                margin: '0 0 40px',
                fontWeight: 400,
                listStyleType: 'none',
            },
            buttonsContainer: {
                margin: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
            linkButtonWrap: {
                margin: '0 10px',
                WebkitFlexGrow: 1,
                flexGrow: 1
            },
            linkButton: {
                width: '10rem',
                color: '#FFF',
                background: colors.AMETHYST
            },
            // 3D shadow effect
            before: {
                zIndex: 1,
                position: 'absolute',
                left: '5px',
                bottom: '13px',
                width: '50%',
                height: '15%',
                maxHeight: '20px',
                WebkitBoxShadow: '0 13px 10px rgba(0, 0, 0, 0.38)',
                MozBoxShadow: '0 13px 10px rgba(0, 0, 0, 0.38)',
                boxShadow: '0 13px 10px rgba(0, 0, 0, 0.38)',
                [ transform ]: 'rotate(-3deg)',
            },
            after: {
                right: '5px',
                left: null,
                [ transform ]: 'rotate(3deg)',
            },
            /* Project Panel */
            background: {
                position: 'absolute',
                zIndex: 4,
                width: '100%',
                height: '100%',
                WebkitTransformStyle: 'preserve-3d',
                MozTransformStyle: 'preserve-3d',
                OTransformStyle: 'preserve-3d',
                transformStyle: 'preserve-3d',
                WebkitTransition: 'all ease-out .8s',
                MozTransition: 'all ease-out .8s',
                OTransition: 'all ease-out .8s',
                transition: 'all ease-out .8s',
            },
            backgroundFlat: {
                position: 'relative',
                zIndex: 9,
                width: '100%',
                height: '100%',
                backgroundSize: 'auto 100%',
                backgroundColor: colors.MENU_DARKER,
            },
            parallaxWrapA: {
                position: 'relative',
                zIndex: 9,
                width: '100%',
                height: '100%',
                backgroundColor: colors.MENU_DARKER,
            },
            parallaxWrapB: {
                position: 'relative',
                zIndex: 9,
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                WebkitPerspectiveOrigin: '50% 50%',
                MozPerspectiveOrigin: '50% 50%',
                OPerspectiveOrigin: '50% 50%',
                perspectiveOrigin: '50% 50%',
            },
            parallaxDiv: {
                position: 'absolute',
                zIndex: 1,
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
            },
            backgroundBlur: {
                //:TODO boolean will include these styles
            },
            banner: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                zIndex: 7,
                textAlign: 'center',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '33.33%',
                backgroundColor: 'rgba(81, 81, 81, 0.62)',
                [ transform ]: 'translate(-50%, -50%)',
            },
            title: {
                padding: '0 5px',
                margin: 'auto',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: '3rem',
                letterSpacing: '-0.1rem',
                textShadow: `-3px -2px ${colors.AMETHYST}`,
                backgroundImage: `linear-gradient(to top right, ${colors.MENU_DARKER} 62%, ${colors.OPERA_MAUVE} 162%)`
            },
            projectDescription: {
                margin: '0 5rem',
                fontSize: '1.38rem',
                fontWeight: 900,
                color: colors.OPERA_MAUVE,
                textShadow
            },
            buttonWrap: {
                width: '13rem',
                margin: 'auto'
            },
            titleShadow: {
                position: 'absolute',
                zIndex: -1,
                textShadow
            },
            /* Project Sidebar */
            sidebarButtonsWrapper: {
                display: 'flex',
                height: '62%',
                overflow: 'visible',
                alignContent: 'flex-start',
                WebkitFlexWrap: 'wrap',
                MSFlexWrap: 'wrap',
                flexWrap: 'wrap',
            },
            sidebarButton: {
                margin: '20px auto',
                WebkitFlexGrow: 1,
                flexGrow: 1,
            },
            sidebarTitle: {
                position: 'absolute',
                zIndex: -1,
                textShadow2
            }
        },
        /* Skills */
        skills: {
            title: {
                margin: 0,
                fontWeight: 900,
                fontSize: '5rem',
                letterSpacing: '-0.25rem'
            },
            flexWrapper: {
                display: 'flex',
                width: '83%',
                height: '66%',
                margin: '40px auto',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                WebkitFlexWrap: 'wrap',
                MSFlexWrap: 'wrap',
                flexWrap: 'wrap'
            },
            skillWrapper: {
                position: 'relative',
                zIndex: 1,
                margin: '5px 10px',
                padding: '15px 40px',
                minWidth: '180px',
                minHeight: '20px',
                background: '#fff',
                borderRadius: '0.38rem',
                border: `2px solid ${colors.AMETHYST}`,
                WebkitTransition: 'all ease-in-out .3s',
                MozTransition: 'all ease-in-out .3s',
                OTransition: 'all ease-in-out .3s',
                transition: 'all ease-in-out .3s',
                WebkitFlexGrow: 0,
                flexGrow: 0
            },
            /* Skill */
            skillContainer: {
                color: colors.OPERA_MAUVE,
                letterSpacing: '-0.03em',
                fontSize: '2rem',
                fontWeight: 400,
                textAlign: 'center'
            },
            skillChar: {
                cursor: 'default',
                display: 'inline-block',
                position: 'relative',
                perspective: 900,
                WebkitTransformStyle: 'preserve-3d',
                MozTransformStyle: 'preserve-3d',
                OTransformStyle: 'preserve-3d',
                transformStyle: 'preserve-3d',
                WebkitFontSmoothing: 'antialiased'
            },
            charPseudo: {
                display: 'block',
                position: 'absolute',
                top: 0,
                left: '-1px',
                WebkitTransformOrigin: 'left top',
                MozTransformOrigin: 'left top',
                OTransformOrigin: 'left top',
                transformOrigin: 'left top',
                //:TODO do I want to refactor to React-Motion spring??
                WebkitTransition: 'all ease .2s',
                MozTransition: 'all ease .2s',
                OTransition: 'all ease .2s',
                transition: 'all ease .2s'
            },
            charBefore: {
                zIndex: 1,
                color: 'rgba(0, 0, 0, 0.3)',
                [ transform ]: 'scale(1.038, 1) skew(0deg, 10deg)'
            },
            charAfter: {
                zIndex: 2,
                color: colors.MENU_DARK,
                textShadow: `1px 0 0.01px ${colors.MENU_DARKER}`,
                [ transform ]: 'rotateY(-20deg)'
            }
        }
    },
    /* Preload */
    preloader: {
        margin: 'auto',
        width: '30em',
        height: '30em',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    /* WelcomeTitle */
    welcomeCell: {
        position: 'absolute',
        left: '50%',
        willChange: 'transform',
        WebkitTransform: 'translate(-50%, -50%)',
        [transform]: 'translate(-50%, -50%)',
    },
    /* TitleText */
    coverTitle: {
        display: 'flex',
        textAlign: 'justify',
        textTransform: 'uppercase'
    },
    /* TitleText */
    coverText: {
        margin: '0 auto',
        display: 'inline-block',
        whiteSpace: 'pre',
        background: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)',
        WebkitTextFillColor: 'transparent',
        MozTextFillColor: 'transparent',
        MsTextFillColor: 'transparent',
        OTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        MozBackgroundClip: 'text',
        MsBackgroundClip: 'text',
        OBackgroundClip: 'text',
        backgroundClip: 'text'
    },
    /* Cell */
    cell: {
        height: '100%',
        overflow: 'hidden',
        position: 'relative'
    },
    /* Title */
    title: {
        title: {
            display: 'flex',
            cursor: 'default',
            textAlign: 'justify',
            textTransform: 'uppercase',
        },
        text: {
            margin: '0 auto',
            display: 'inline-block',
            whiteSpace: 'pre-line',
            WebkitBackgroundClip: 'text',
            MozBackgroundClip: 'text',
            MsBackgroundClip: 'text',
            OBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            MozTextFillColor: 'transparent',
            MsTextFillColor: 'transparent',
            OTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(to top right, rgb(255, 64, 64) 62%, rgb(255, 255, 102) 162%)'
        }
    },
    /* Icon */
    iconStyle: {
        width: '1.5em',
        height: '1.5em',
        margin: '0 auto',
        lineHeight: '1.5em',
        borderRadius: '50%',
        color: 'rgb(255, 255, 255)',
        background: 'rgba(45, 45, 45, 1)',
        /* -~- styling & comments from the fontello.com package -~- */
        fontFamily: 'fontello',
        fontStyle: 'normal',
        fontWeight: 'normal',
        speak: 'none',
        display: 'block',
        textDecoration: 'inherit',
        // marginRight: '.2em',
        textAlign: 'center',
        // opacity: '0.8',
        /* For safety - reset parent styles, that can break glyph codes*/
        fontVariant: 'normal',
        textTransform: 'none',
        /* Animation center compensation - margins should be symmetric */
        /* remove if not needed */
        // marginLeft: '.2em',
        /* you can be more comfortable with increased icons size */
        fontSize: '200%',
        /* Font smoothing. That was taken from TWBS */
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
    },
    /* SectionFoot */
    foot: {
        position: 'absolute',
        zIndex: 9,
        left: '50%',
        bottom: 0,
        // width: '100%',
        // height: '8.33%',
        textAlign: 'center',
        [transform]: 'translate(-50%, 0)'
    },
    footButton: {
        cursor: 'pointer',
        verticalAlign: 'middle',
        color: '#FFF',
        fontSize: '5rem',
        background: 'transparent',
        [transform]: 'scale(1) translate(0,0)'
    },
    /* Footer */
    footer: {
        margin: '10px',
        padding: '20px 10px',
        fontSize: '0.8rem'
    },
    credit: {
        width: '62%',
        margin: '0 auto',
        textAlign: 'center'
    },
    /* Hexagon */
    spinner: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    },
    containerA: {
        position: 'absolute',
        width: '75%',
        height: '75%',
        top: '12.5%',
        left: '12.5%'
    },
    hex: {
        position: 'absolute',
        boxSizing: 'border-box',
        width: '100%',
        height: '57.735%',
        top: '21.1325%',
        left: 0,
        borderLeft: '3px solid rgb(255, 64, 64)',
        borderRight: '3px solid rgb(255, 64, 64)'
    },
    /* BorderGrad */
    sectionItem: {
        overflow: 'hidden',
        padding: '1rem 2rem',
        border: '2px solid',
        position: 'absolute',
        zIndex: 9,
        background: 'rgba(255, 255, 255, 1)',
        borderImage: 'linear-gradient(to top right, rgb(255, 64, 64) 62%, rgb(252, 255, 88) 162%)',
        borderImageSlice: 1
    },
    /* Divider */
    divider: {
        display: 'block',
        margin: '5px 0',
        background: 'rgba(81, 81, 81, 0.5)'
    },
    horizontal: {
        width: '100%',
        height: '1px',
    },
    vertical: {
        width: '1px',
        height: '100%'
    },
    /* FillSection */
    fillSection: {
        height: '100%',
        padding: '20px',
        overflow: 'hidden',
        background: 'none',
        position: 'relative',
        zIndex: 8
    },
    /* Section */
    section: {
        position: 'relative',
        top: 0,
        left: 0,
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
    },
    /* SideSection */
    rightSideWrapper: {
        position: 'relative',
        zIndex: 9,
        float: 'right',
        height: '100%',
        width: '22rem', //:TODO fix or replace this
        maxWidth: '33.33%' //:TODO fix or replace this
    },
    rightSideContainer: {
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '100%',
        padding: '20px',
        background: 'rgb(255, 255, 255)',
    },
    // SideSection >> 3D shadow effect
    before: {
        zIndex: 1,
        position: 'absolute',
        bottom: '50%',
        left: '13px',
        width: '5%',
        top: '2px',
        maxWidth: '13px',
        WebkitBoxShadow: '-13px 0 10px rgba(0, 0, 0, 0.38)',
        MozBoxShadow: '-13px 0 10px rgba(0, 0, 0, 0.38)',
        boxShadow: '-13px 0 10px rgba(0, 0, 0, 0.38)',
        WebkitTransform: 'rotate(-3deg)',
        MozTransform: 'rotate(-3deg)',
        OTransform: 'rotate(-3deg)',
        MsTransform: 'rotate(-3deg)',
        transform: 'rotate(-3deg)',
    },
    after: {
        top: '50%',
        bottom: '2px',
        WebkitTransform: 'rotate(3deg)',
        MozTransform: 'rotate(3deg)',
        OTransform: 'rotate(3deg)',
        MsTransform: 'rotate(3deg)',
        transform: 'rotate(3deg)',
    },
    /* Button */
    button: {
        cursor: 'default',
        padding: '0.5rem',
        whiteSpace: 'pre-line',
        fontWeight: 400,
        textAlign: 'center',
        letterSpacing: '-0.01rem',
        textTransform: 'uppercase',
        borderRadius: '0.13rem',
        background: 'rgb(255, 64, 64)'
    },
    /* SidebarButton */
    sidebarButton: {
        cursor: 'default',
        padding: '0.5rem',
        whiteSpace: 'pre-line',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '0.13rem'
    },
    /* carousel3D */
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        margin: '0 auto',
        zIndex: 9,
        WebkitPerspectiveOrigin: '100% 50%',
        MozPerspectiveOrigin: '100% 50%',
        OPerspectiveOrigin: '100% 50%',
        perspectiveOrigin: '100% 50%',
        WebkitPerspective: '100vmin',
        MozPerspective: '100vmin',
        OPerspective: '100vmin',
        perspective: '100vmin',
    },
    carousel: {
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 9,
        WebkitTransformStyle: 'preserve-3d',
        MozTransformStyle: 'preserve-3d',
        OTransformStyle: 'preserve-3d',
        transformStyle: 'preserve-3d',
        WebkitTransitionStyle: '-webkit-transform 0.1s',
        MozTransitionStyle: '-moz-transform 0.1s',
        OTransitionStyle: '-o-transform 0.1s',
        transitionStyle: 'transform 0.1s',
    },
    buttonWrap: {
        zIndex: 10,
        position: 'absolute',
        top: '50%',
        [transform]: 'translate(-50%, -50%)'
    },
    /* carouselPanel */
    carouselPanel: {
        display: 'block',
        position: 'absolute',
        zIndex: 5,
        width: '100%',
        height: '100%',
        WbkitBackfaceVisibility: 'hidden',
        MozBackfaceVisibility: 'hidden',
        OBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
    },
    /* hoverSpin */
    content: {
        margin: '.3em .3em',
        display: 'inline-block'
    }
};

/**
 * CSS media queries
 */
export const sml = window ? window.matchMedia('screen and (max-width: 899px) and (min-width: 500px)') : null;
export const med = window ? window.matchMedia('screen and (max-width: 1299px) and (min-width: 900px)') : null;
export const lrg = window ? window.matchMedia('screen and (min-width: 1300px)') : null;
export const prt = window ? window.matchMedia(`only screen and (min-device-width: 299px)
                                        and (max-device-width: 749px)
                                        and (-webkit-min-device-pixel-ratio: 2)
                                        and (orientation: portrait)`) : null;
export const lnd = window ? window.matchMedia(`only screen and (min-device-width: 299px)
                                        and (max-device-width: 749px)
                                        and (-webkit-min-device-pixel-ratio: 2)
                                        and (orientation: landscape)`) : null;
