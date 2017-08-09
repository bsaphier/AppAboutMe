import Modernizr from '../.modernizrrc';
const transform = Modernizr.prefixed('transform');


export const styles = {
    cell: {
        position: 'absolute',
        left: '50%',
        willChange: 'transform',
        WebkitTransform: 'translate(-50%, -50%)',
        [transform]: 'translate(-50%, -50%)',
    },
    title: {
        display: 'flex',
        textAlign: 'justify',
        textTransform: 'uppercase'
    },
    text: {
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
    }
};
