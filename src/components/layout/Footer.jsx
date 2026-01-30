import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className="container">
                <div className={styles.topSection}>
                    <div className={styles.brandCol}>
                        <div className={styles.logo}>Mega<span className={styles.logoAccent}>Site</span></div>
                        <p className={styles.tagline}>
                            Engineering the digital future for the world's leading enterprises.
                        </p>
                        <div className={styles.socials}>
                            {['Ln', 'Tw', 'Fb', 'Ig'].map(s => <span key={s} className={styles.socialIcon}>{s}</span>)}
                        </div>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Solutions</h4>
                        <ul>
                            <li><a href="#">Cloud Infrastructure</a></li>
                            <li><a href="#">Data Analytics</a></li>
                            <li><a href="#">AI & Automation</a></li>
                            <li><a href="#">Cybersecurity</a></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Industries</h4>
                        <ul>
                            <li><a href="#">Banking & Finance</a></li>
                            <li><a href="#">Healthcare</a></li>
                            <li><a href="#">Retail & CPG</a></li>
                            <li><a href="#">Manufacturing</a></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; 2026 Mega Site Inc. All rights reserved.</p>
                    <div className={styles.certifications}>
                        <span>ISO 27001 Certified</span>
                        <span>GDPR Compliant</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
