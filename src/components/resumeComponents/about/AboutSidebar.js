import React from 'react';
import colors from '../../../bin/colors';
import { buttons, Title, Divider, SideSection } from '../../displayComponents';
import { styles } from '../../../styles';
import { hoverSpin } from '../../HOC';


const { IconButton } = buttons;
const SocialButton = hoverSpin(IconButton);

// label must be a string and info must be a valid react element
const sidebarContentMap = ({ index, label, info }) => (
    <div key={`about-sidebar-item${index}`} style={{margin: '1rem 0'}}>
        <span style={styles.resumeComponents.about.aboutSidebarLabel}>{ label }</span>
        <Divider style={{width: '62%', background: colors.CORAL_RED}} />
        { info }
    </div>
);


const AboutSidebar = ({ style, content, burgerOpen }) => {
    const socialButtons = content.links.map( link => (
        <div key={link.name} style={styles.resumeComponents.about.socialButtonWrap}>
            <SocialButton
                url={link.url}
                name={link.name}
                icon={link.icon}
                hoverColor={[255, 68, 62]}
                initialColor={[45, 45, 45]} />
            <div style={styles.resumeComponents.about.socialButtonLabel}><span>{ link.name }</span></div>
        </div>
    ));
    const items = [{
        index: 0,
        label: 'Who I Am:',
        info: (
            <span style={{ ...styles.resumeComponents.about.aboutSidebarInfo, fontSize: '1.5rem'}}>
                { content.about }
            </span>
        )
    }, {
        index: 1,
        label: 'Send Me An Email:',
        info: (
            <span style={styles.resumeComponents.about.aboutSidebarInfo}>
                <a href={`mailto:${content.email}`} target="_blank" rel="noopener noreferrer">{ content.email }</a>
            </span>
        )
    }, {
        index: 2,
        label: 'My Home Base:',
        info: (<span style={styles.resumeComponents.about.aboutSidebarInfo}>{ content.location }</span>)
    }, {
        index: 3,
        label: 'Social Media n\' Stuff:',
        info: (<div style={styles.resumeComponents.about.socialButtons}>{ socialButtons }</div>)
    }];
    return (
        <SideSection title="Contact" burger={{ open: burgerOpen }}>
            <Title style={style.title}><span>Contact</span></Title>
            <Divider style={{background: colors.AMETHYST}} />
            <div style={styles.resumeComponents.about.aboutSidebarContent}>
                { items.map(sidebarContentMap) }
            </div>
        </SideSection>
    );
};


export default AboutSidebar;
