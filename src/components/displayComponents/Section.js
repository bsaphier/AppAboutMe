import React from 'react';
import { styles } from '../../styles';


const Section = (props) => (
    <section className="section" id={props.id} style={{...styles.section, ...props.style}}>
        { props.children }
    </section>
);

export default Section;
