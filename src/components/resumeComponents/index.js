import React from 'react';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import { styles } from '../../styles';


const ResumeComponents = ({ about, skills, contact, siteInfo, projects, ...props }) => (
    <div>
        <About style={{...styles.resumeComponents}} content={{ about, contact, siteInfo }} {...props} />
        <Projects style={{...styles.resumeComponents}} content={ projects } {...props} />
        <Skills style={{...styles.resumeComponents}} content={ skills } {...props} />
    </div>
);

export default ResumeComponents;
