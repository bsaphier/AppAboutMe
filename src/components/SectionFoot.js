import React from 'react';
import Scroll from 'react-scroll';
import Modernizr from '../../.modernizrrc';
import { scrollToTop } from '../bin/scrollHelpers';
import { Icon } from './displayComponents';
import { clickSpin } from './HOC';
import { styles } from '../styles';


const transform = Modernizr.prefixed('transform');
const NavButton = clickSpin(Icon);
const { Link } = Scroll;

const SectionFoot = ({ to }) => (
    <div style={styles.foot}>
        { to.length === 0
            ? <div style={{[transform]: 'rotate(180deg)'}}>
                <a onClick={scrollToTop} >
                    <NavButton
                        icon="angle-down"
                        initialColor={[255, 68, 62, 1]}
                        clickColor={[81, 81, 81, 1]}
                        style={styles.footButton} />
                </a>
            </div>
            : <Link to={to} smooth={true} duration={500} >
                <NavButton
                    icon="angle-down"
                    initialColor={[255, 68, 62, 1]}
                    clickColor={[81, 81, 81, 1]}
                    style={styles.footButton} />
            </Link>
        }
    </div>
);


export default SectionFoot;
