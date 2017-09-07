import React from 'react';
import colors from '../../../bin/colors';
import { Title, Divider, buttons } from '../../displayComponents';
import { hoverSpin } from '../../HOC';
import { styles } from '../../../styles';


const { IconButton } = buttons;
const SocialButton = hoverSpin(IconButton);


const AboutPanel = ({ style, content, burgerOpen }) => {
    let btnLinks;

    if (!burgerOpen) {
        const socialButtons = content.links.map( link => (
            <div key={link.name} style={styles.resumeComponents.about.socialButtonWrap}>
                <SocialButton
                    url={link.url}
                    name={link.name}
                    icon={link.icon}
                    hoverColor={[255, 68, 62]}
                    initialColor={[45, 45, 45]} />
                <div style={styles.resumeComponents.about.socialButtonLabel}>
                    <span>{ link.name }</span>
                </div>
            </div>
        ));

        btnLinks = (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                { socialButtons }
            </div>
        );
    }

    return (
        <div className="about-panel" style={styles.resumeComponents.about.aboutPanel}>
            <div style={styles.resumeComponents.about.aboutPanelBefore} />
            <div style={styles.resumeComponents.about.aboutPanelContent}>
                <Title style={{
                    ...style.title,
                    padding: '0 0.08em',
                    fontSize: '2rem',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    letterSpacing: '0.05em' }}>
                    <span>{`About  This  Site`}</span>
                </Title>
                <Divider style={{width: '62%', background: colors.AMETHYST}} />
                <p style={style.text}>{ content.siteInfo }</p>
                { btnLinks }
            </div>
            <div style={{...styles.resumeComponents.about.aboutPanelBefore, ...styles.resumeComponents.about.aboutPanelAfter}} />
        </div>
    );
};


export default AboutPanel;
