import React from 'react';
import { Link } from 'react-router-dom';
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
                            <li><Link to="/services/cloud-migration">Cloud Infrastructure</Link></li>
                            <li><Link to="/services/data-analytics">Data Analytics</Link></li>
                            <li><Link to="/services/generative-ai">AI & Automation</Link></li>
                            <li><Link to="/services/zero-trust">Cybersecurity</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Industries</h4>
                        <ul>
                            <li><Link to="#">Banking & Finance</Link></li>
                            <li><Link to="#">Healthcare</Link></li>
                            <li><Link to="#">Retail & CPG</Link></li>
                            <li><Link to="#">Manufacturing</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Company</h4>
                        <ul>
                            <li><Link to="/company">About Us</Link></li>
                            <li><Link to="#">Careers</Link></li>
                            <li><Link to="#">Investor Relations</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Legal</h4>
                        <ul>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Use</Link></li>
                            <li><Link to="#">Cookie Policy</Link></li>
                            <li><Link to="#">Accessibility</Link></li>
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
