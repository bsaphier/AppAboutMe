import React from 'react';
import { Motion, presets, spring } from 'react-motion';
import Modernizr from '../../../.modernizrrc';
import { styles } from '../../styles';
import { int } from '../../bin/utils';


const transform = Modernizr.prefixed('transform');

// the hoverSpin HOC takes two props: initialColor & hoverColor which are
// arrays of RGB values
const hoverSpin = (Component) => {

    return class HoverSpin extends React.Component {

        constructor(props) {
            super(props);
            let [red, green, blue, opac = 1] = props.initialColor;
            this.state = {
                red,
                green,
                blue,
                opac,
                degree: 0,
                shadowX: -1,
                shadowY: 1,
                shadow: props.shadow || 0.25
            };
            this.hover = this.hover.bind(this);
            this.leave = this.leave.bind(this);
        }

        hover() {
            let [red, green, blue, opac = 1] = this.props.hoverColor;
            this.setState({
                red: spring(red),
                green: spring(green),
                blue: spring(blue),
                opac: spring(opac),
                degree: spring(360, presets.gentle),
                shadowX: spring(-3, presets.stiff),
                shadowY: spring(2, presets.stiff),
                shadow: spring((this.props.shadow || 0.4), presets.stiff)
            });
        }

        leave() {
            let [red, green, blue, opac = 1] = this.props.initialColor;
            this.setState({
                red: spring(red),
                green: spring(green),
                blue: spring(blue),
                opac: spring(opac),
                degree: spring(0, presets.gentle),
                shadowX: spring(-1, presets.stiff),
                shadowY: spring(1, presets.stiff),
                shadow: spring((this.props.shadow || 0.25), presets.stiff)
            });
        }

        render() {
            return (
                <div
                    className="hoverSpinHOC"
                    style={styles.content}
                    onMouseOver={this.hover}
                    onMouseOut={this.leave}>
                    <Motion style={this.state}>
                        {({ red, blue, green, opac, degree, shadow, shadowX, shadowY }) => (
                            <div style={{ [ transform ]: `rotateY(${degree}deg)` }}>
                                <Component
                                    style={{
                                        ...this.props.style,
                                        boxShadow: `${shadowX}px ${shadowY}px 5px -1px rgba(81, 81, 81, ${shadow})`,
                                        background: `rgba(${int(red)}, ${int(green)}, ${int(blue)}, ${opac})`
                                    }}
                                    {...this.props} />
                            </div>
                        )}
                    </Motion>
                </div>
            );
        }
    };

};


export default hoverSpin;
