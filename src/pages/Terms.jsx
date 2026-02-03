import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Copyright, UserCheck, AlertTriangle, Scale, Mail, ShieldAlert } from 'lucide-react';
import styles from './ServicePage.module.css';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const prohibited = ['Systematically retrieve data', 'Trick, defraud, or mislead us', 'Interfere with security features', 'Make improper use of support'];

    const sections = [
        { id: 'agreement', icon: FileText, title: '1. Agreement to Terms', color: '#3B82F6', content: 'These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and MegaSite ("Company", "we", "us", "our"), concerning your access to and use of the website.' },
        { id: 'ip', icon: Copyright, title: '2. Intellectual Property Rights', color: '#8B5CF6', content: 'Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content").' },
        { id: 'representations', icon: UserCheck, title: '3. User Representations', color: '#14B8A6', content: 'By using the Site, you represent and warrant that all registration information you submit will be true, accurate, current, and complete, and you have the legal capacity and you agree to comply with these Terms of Use.' },
        { id: 'prohibited', icon: AlertTriangle, title: '4. Prohibited Activities', color: '#EF4444', content: 'The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. You agree not to:' },
        { id: 'gov-law', icon: Scale, title: '5. Governing Law', color: '#64748B', content: 'These Terms shall be governed by and defined following the laws of The United States. MegaSite and yourself irrevocably consent that the courts of The United States shall have exclusive jurisdiction.' }
    ];

    return (
        <div className={styles.bgNavy} style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
            <div className={styles.container}>

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}
                >
                    <span className={styles.badge}><Scale size={14} /> Legal Center</span>
                    <h1 className={styles.title} style={{ marginBottom: '1.5rem' }}>Terms of Use</h1>
                    <p className={styles.subtitle} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        The rules of engagement for our digital ecosystem.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>

                    {/* Last Updated */}
                    <p style={{ color: '#64748B', fontSize: '0.875rem', fontFamily: 'monospace', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                        Last Updated: October 2025
                    </p>

                    {/* SECTIONS */}
                    {sections.map((section, idx) => (
                        <motion.section
                            key={section.id}
                            id={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={styles.featureCard}
                            style={{ padding: '2rem' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ padding: '0.75rem', background: `${section.color}20`, borderRadius: '12px', color: section.color }}>
                                    <section.icon size={24} />
                                </div>
                                <h2 style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700 }}>{section.title}</h2>
                            </div>
                            <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.8 }}>{section.content}</p>

                            {section.id === 'agreement' && (
                                <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3B82F6', borderRadius: '0 8px 8px 0' }}>
                                    <p style={{ color: '#93C5FD', fontSize: '0.95rem', lineHeight: 1.7 }}>
                                        By accessing the Site, you agree that you have read, understood, and agreed to be bound by all of these Terms of Use. If you do not agree with all of these terms of use, then you are expressly prohibited from using the Site.
                                    </p>
                                </div>
                            )}

                            {section.id === 'prohibited' && (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
                                    {prohibited.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                                            <ShieldAlert size={18} style={{ color: '#EF4444' }} />
                                            <span style={{ color: '#E2E8F0', fontSize: '0.9rem' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.section>
                    ))}

                    {/* CONTACT */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.featureCard}
                        style={{ padding: '2rem' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ padding: '0.75rem', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '12px', color: '#60A5FA' }}>
                                <Mail size={24} />
                            </div>
                            <h2 style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700 }}>Contact Us</h2>
                        </div>
                        <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at <a href="mailto:legal@megasite.com" style={{ color: '#60A5FA', textDecoration: 'underline' }}>legal@megasite.com</a>.
                        </p>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
