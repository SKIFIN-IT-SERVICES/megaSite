import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, Briefcase } from 'lucide-react';
import styles from './ServicePage.module.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formStatus, setFormStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    const offices = [
        { city: "New York", address: "1 World Trade Center, Suite 4500, NY 10007", phone: "+1 (212) 555-0123" },
        { city: "London", address: "30 St Mary Axe, London EC3A 8BF", phone: "+44 20 7123 4567" },
        { city: "Singapore", address: "Marina Bay Financial Centre, Tower 1, Singapore", phone: "+65 6789 0123" },
        { city: "Bangalore", address: "Embassy Tech Village, ORR, Bangalore 560103", phone: "+91 80 1234 5678" },
        { city: "Sydney", address: "100 Barangaroo Avenue, Sydney NSW 2000", phone: "+61 2 8000 1234" },
        { city: "Berlin", address: "Potsdamer Platz 1, 10785 Berlin", phone: "+49 30 1234 5678" }
    ];

    const contactInfo = [
        { icon: Mail, title: "Sales Inquiries", desc: "For project quotes and service information.", email: "sales@megasite.com", phone: "+1 (800) 555-0199", color: "#60A5FA" },
        { icon: Briefcase, title: "Careers", desc: "Join our team of digital innovators.", email: "careers@megasite.com", phone: "+1 (800) 555-0299", color: "#A78BFA" },
        { icon: Phone, title: "General Support", desc: "For existing clients and general queries.", email: "support@megasite.com", phone: "+1 (800) 555-0399", color: "#34D399" }
    ];

    return (
        <div className={styles.bgNavy} style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
            <div className={styles.container}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>

                    {/* HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                    >
                        <span className={styles.badge}>Contact Us</span>
                        <h1 className={styles.title} style={{ marginBottom: '1.5rem' }}>Let's Talk Business.</h1>
                        <p className={styles.subtitle} style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Whether you're interested in our services, looking for advice, or just want to say hello, we'd love to hear from you.
                        </p>
                    </motion.div>

                    {/* TWO COLUMN LAYOUT */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                        {/* LEFT: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            {contactInfo.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={styles.featureCard}
                                    style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}
                                >
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '12px',
                                        background: `${item.color}15`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <item.icon size={24} style={{ color: item.color }} />
                                    </div>
                                    <div>
                                        <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                                        <p style={{ color: '#94A3B8', marginBottom: '0.75rem' }}>{item.desc}</p>
                                        <a href={`mailto:${item.email}`} style={{ color: item.color, fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>{item.email}</a>
                                        <a href={`tel:${item.phone.replace(/\D/g, '')}`} style={{ color: '#64748B', fontSize: '0.875rem' }}>{item.phone}</a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* RIGHT: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className={styles.featureCard}
                            style={{ padding: '2.5rem' }}
                        >
                            {formStatus === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                    <div style={{
                                        width: '80px', height: '80px', borderRadius: '50%',
                                        background: 'rgba(52, 211, 153, 0.2)',
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <Send size={36} style={{ color: '#34D399' }} />
                                    </div>
                                    <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>Message Sent!</h3>
                                    <p style={{ color: '#CBD5E1', marginBottom: '1.5rem' }}>Thank you for reaching out. A member of our team will be in touch shortly.</p>
                                    <button onClick={() => setFormStatus('idle')} style={{ color: '#60A5FA', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Send another message</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ color: '#94A3B8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Full Name *</label>
                                            <input type="text" required placeholder="John Doe" style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFFFFF', outline: 'none' }} />
                                        </div>
                                        <div>
                                            <label style={{ color: '#94A3B8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Business Email *</label>
                                            <input type="email" required placeholder="john@company.com" style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFFFFF', outline: 'none' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ color: '#94A3B8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Company</label>
                                            <input type="text" placeholder="Company Ltd." style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFFFFF', outline: 'none' }} />
                                        </div>
                                        <div>
                                            <label style={{ color: '#94A3B8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Industry</label>
                                            <select style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFFFFF', outline: 'none' }}>
                                                <option value="">Select Industry...</option>
                                                <option>Technology</option>
                                                <option>Healthcare</option>
                                                <option>Finance</option>
                                                <option>Manufacturing</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ color: '#94A3B8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Subject *</label>
                                        <input type="text" required placeholder="Brief summary of your request" style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFFFFF', outline: 'none' }} />
                                    </div>
                                    <div>
                                        <label style={{ color: '#94A3B8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Message *</label>
                                        <textarea required rows={4} placeholder="How can we help you?" style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFFFFF', outline: 'none', resize: 'vertical' }}></textarea>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <input type="checkbox" id="consent" required style={{ marginTop: '0.25rem' }} />
                                        <label htmlFor="consent" style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
                                            I agree to receive communications from MegaSite and understand that my data will be processed in accordance with the <a href="/privacy" style={{ color: '#60A5FA' }}>Privacy Policy</a>.
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formStatus === 'sending'}
                                        className={styles.btnPrimary}
                                        style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', color: '#FFFFFF' }}
                                    >
                                        {formStatus === 'sending' ? 'Sending...' : <>Send Message <ArrowRight size={20} /></>}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>

                    {/* OFFICES GRID */}
                    <div style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                            <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                                <MapPin size={24} style={{ color: '#FFFFFF' }} />
                            </div>
                            <h2 style={{ color: '#FFFFFF', fontSize: '2rem', fontWeight: 700 }}>Our Global Presence</h2>
                        </div>

                        <div className={styles.industriesGrid}>
                            {offices.map((office, idx) => (
                                <div key={idx} className={styles.industryCard}>
                                    <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{office.city}</h3>
                                    <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>{office.address}</p>
                                    <p style={{ color: '#64748B', fontSize: '0.875rem', fontFamily: 'monospace' }}>{office.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
