import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Settings, Share2, Mail, CheckCircle2 } from 'lucide-react';
import styles from './ServicePage.module.css';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dataTypes = ['Names', 'Phone Numbers', 'Email Addresses', 'Job Titles', 'Mailing Addresses', 'Contact Preferences'];

    const sections = [
        { id: 'intro', icon: Shield, title: '1. Introduction', color: '#3B82F6', content: 'Welcome to MegaSite ("Company", "we", "our", "us"). We are committed to protecting your personal information and your right to privacy. When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously.' },
        { id: 'collection', icon: Database, title: '2. Information We Collect', color: '#8B5CF6', content: 'We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services.' },
        { id: 'usage', icon: Settings, title: '3. How We Use Your Information', color: '#14B8A6', content: 'We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests.' },
        { id: 'sharing', icon: Share2, title: '4. Sharing Your Information', color: '#F59E0B', content: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.' }
    ];

    const usages = [
        'To facilitate account creation and logon process.',
        'To send administrative information to you.',
        'To protect our Services (fraud monitoring and prevention).'
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
                    <span className={styles.badge}><Shield size={14} /> Legal Center</span>
                    <h1 className={styles.title} style={{ marginBottom: '1.5rem' }}>Privacy Policy</h1>
                    <p className={styles.subtitle} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Transparency is the foundation of trust. Here is how we handle your data.
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

                            {section.id === 'collection' && (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
                                    {dataTypes.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <CheckCircle2 size={18} style={{ color: '#34D399' }} />
                                            <span style={{ color: '#E2E8F0' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.id === 'usage' && (
                                <ul style={{ marginTop: '1.5rem', paddingLeft: 0, listStyle: 'none' }}>
                                    {usages.map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem', color: '#CBD5E1' }}>
                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6', marginTop: '0.6rem', flexShrink: 0 }}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.id === 'sharing' && (
                                <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #F59E0B', borderRadius: '0 8px 8px 0' }}>
                                    <p style={{ color: '#FCD34D', fontWeight: 500 }}>
                                        We never sell your personal data to third parties.
                                    </p>
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
                            <h2 style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700 }}>5. Contact Us</h2>
                        </div>
                        <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            If you have questions or comments about this policy, you may email us at <a href="mailto:privacy@megasite.com" style={{ color: '#60A5FA', textDecoration: 'underline' }}>privacy@megasite.com</a> or by post to:
                        </p>
                        <address style={{ fontStyle: 'normal', color: '#94A3B8', paddingLeft: '1rem', borderLeft: '2px solid #475569' }}>
                            MegaSite Inc.<br />
                            Attn: Data Protection Officer<br />
                            1 World Trade Center, Suite 4500<br />
                            New York, NY 10007
                        </address>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
