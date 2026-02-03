import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, Briefcase, ChevronRight, Zap, Shield, Target, Smartphone, Cloud, Code, Layers, Leaf, Heart, BookOpen } from 'lucide-react';
import styles from './ServicePage.module.css';

const Company = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { label: "Years of Excellence", value: "30+" },
        { label: "Global Employees", value: "5,000+" },
        { label: "Active Clients", value: "300+" },
        { label: "Countries Served", value: "40+" }
    ];

    const offerings = [
        { title: "Digital Product Engineering", desc: "Building scalable, future-proof platforms.", icon: Code },
        { title: "AI & Data Analytics", desc: "Turning data into decisive action.", icon: Cloud },
        { title: "Enterprise Mobility", desc: "Seamless experiences across all devices.", icon: Smartphone },
        { title: "Cloud Transformation", desc: "Modernizing infrastructure for agility.", icon: Layers }
    ];

    const values = [
        { title: "Innovation", desc: "We don't just follow trends; we set them.", icon: Zap, color: "#F59E0B" },
        { title: "Integrity", desc: "Transparency in every interaction and line of code.", icon: Shield, color: "#3B82F6" },
        { title: "Excellence", desc: "Good enough is never enough. We strive for perfection.", icon: Award, color: "#8B5CF6" },
        { title: "Client Focus", desc: "Your success is our North Star.", icon: Users, color: "#10B981" }
    ];

    const leaders = [
        { name: "Dr. Richard S.", role: "Founder & Chairman", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
        { name: "Sarah M.", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
        { name: "David K.", role: "Global Head of Delivery", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
        { name: "Elena R.", role: "Chief Innovation Officer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" }
    ];

    const csr = [
        { title: "Education", desc: "Empowering under-privileged youth with digital skills.", icon: BookOpen, color: "#14B8A6" },
        { title: "Environment", desc: "Carbon-neutral operations and green tech initiatives.", icon: Leaf, color: "#22C55E" },
        { title: "Community", desc: "Supporting local communities through volunteerism.", icon: Heart, color: "#F43F5E" }
    ];

    return (
        <div className={styles.bgNavy} style={{ minHeight: '100vh' }}>
            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" alt="Technology" className={styles.heroImg} />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className={styles.badge}>Re-imagining the Digital Future</span>
                        <h1 className={styles.title}>Engineering<br /><span style={{ color: '#60A5FA' }}>Excellence.</span></h1>
                        <p className={styles.subtitle}>We partner with global enterprises to build digital products, modernize technology, and accelerate innovation.</p>
                        <div className={styles.ctaGroup}>
                            <a href="/services" className={styles.btnPrimary}>Explore Our Solutions <ChevronRight size={20} /></a>
                            <a href="#about" className={styles.btnSecondary}>Why MegaSite?</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STATS STRIP */}
            <section className={styles.bgVibrant} style={{ padding: '4rem 0' }}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {stats.map((stat, idx) => (
                            <div key={idx} style={{ textAlign: 'center' }}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section id="about" className={`${styles.section} ${styles.bgSlate}`}>
                <div className={styles.container}>
                    <div className={styles.overviewGrid}>
                        <div>
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <span style={{ color: '#60A5FA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', display: 'block' }}>Who We Are</span>
                                <h2 className={styles.overviewTitle}>Accelerating Digital Business for over 3 Decades.</h2>
                                <p className={styles.overviewText}>
                                    We are a global digital product engineering company that helps our clients design and build tomorrow's products and platforms. We differ from other firms because we don't just consult; we execute.
                                </p>
                                <div style={{ paddingLeft: '1.5rem', borderLeft: '4px solid #3B82F6', margin: '2rem 0' }}>
                                    <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#CBD5E1', lineHeight: 1.7 }}>
                                        "Our philosophy is simple: Technology should solve problems, not create them. Since 1993, we've been delivering precisely that."
                                    </p>
                                    <p style={{ marginTop: '1rem', fontWeight: 700, color: '#FFFFFF' }}>— Dr. Richard S., Founder</p>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={styles.overviewImageWrapper}>
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" alt="Office Collaboration" className={styles.overviewImage} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className={`${styles.section} ${styles.bgNavy}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Core Values</h2>
                        <p className={styles.sectionDesc}>The principles that guide our every action.</p>
                    </div>
                    <div className={styles.featuresGrid}>
                        {values.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.featureCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className={styles.featureIcon} style={{ background: `${item.color}20`, color: item.color }}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className={styles.featureTitle}>{item.title}</h3>
                                <p className={styles.featureDesc}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERTISE */}
            <section className={`${styles.section} ${styles.bgSlate}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Expertise</h2>
                        <p className={styles.sectionDesc}>Comprehensive digital capabilities to power your growth.</p>
                    </div>
                    <div className={styles.featuresGrid}>
                        {offerings.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.featureCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className={styles.featureIcon}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className={styles.featureTitle}>{item.title}</h3>
                                <p className={styles.featureDesc}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLIENTS STRIP */}
            <section style={{ background: '#020c1b', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className={styles.container}>
                    <p style={{ textAlign: 'center', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600, marginBottom: '2.5rem' }}>Trusted by Global Leaders</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', opacity: 0.5 }}>
                        <span style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Globe size={24} /> GlobalBank</span>
                        <span style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Zap size={24} /> PowerCorp</span>
                        <span style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Shield size={24} /> SecureNet</span>
                        <span style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Cloud size={24} /> CloudNine</span>
                        <span style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Target size={24} /> Stratos</span>
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className={`${styles.section} ${styles.bgNavy}`}>
                <div className={styles.container}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                        <div>
                            <span style={{ color: '#60A5FA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', display: 'block' }}>Leadership</span>
                            <h2 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: 0 }}>Meet Our Visionaries</h2>
                        </div>
                    </div>
                    <div className={styles.featuresGrid}>
                        {leaders.map((leader, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}
                            >
                                <div style={{ overflow: 'hidden' }}>
                                    <img src={leader.img} alt={leader.name} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', transition: 'transform 0.5s' }} />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{leader.name}</h3>
                                    <p style={{ color: '#60A5FA', fontWeight: 500, fontSize: '0.9rem' }}>{leader.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CSR */}
            <section className={`${styles.section} ${styles.bgSlate}`}>
                <div className={styles.container}>
                    <div className={styles.overviewGrid}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1200" alt="CSR Activities" style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span style={{ color: '#14B8A6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', display: 'block' }}>CSR & Sustainability</span>
                            <h2 className={styles.overviewTitle}>Making a Difference Beyond Business.</h2>
                            <p className={styles.overviewText}>
                                We are committed to creating a sustainable future through our CSR initiatives focusing on education, environment, and community support.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                                {csr.map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ padding: '0.75rem', background: `${item.color}20`, borderRadius: '12px', color: item.color }}>
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h3>
                                            <p style={{ color: '#94A3B8' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Company;
