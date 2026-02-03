import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesContent } from '../data/servicesContent';
import styles from './ServicePage.module.css';
import {
    Zap,
    Target,
    Shield,
    Activity,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Globe,
    Database,
    TrendingUp,
    ShoppingBag,
    Factory,
    Scale,
    Clapperboard
} from 'lucide-react';

const ServicePage = () => {
    const { id } = useParams();
    const content = servicesContent[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!content || !content.features) {
        return (
            <div className={`${styles.hero} ${styles.bgNavy}`} style={{ minHeight: '60vh' }}>
                <div className={styles.heroContent} style={{ textAlign: 'center' }}>
                    <h1 className={styles.title}>{content?.title || 'Service Under Construction'}</h1>
                    <p className={styles.subtitle}>Our team is actively defining the specifications for this capability.</p>
                    <Link to="/" className={styles.btnPrimary}>Return Home</Link>
                </div>
            </div>
        );
    }

    // Icons mapper
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Zap': return <Zap size={28} />;
            case 'Activity': return <Activity size={28} />;
            case 'Shield': return <Shield size={28} />;
            case 'Target': return <Target size={28} />;
            case 'Cpu': return <Cpu size={28} />;
            case 'Globe': return <Globe size={28} />;
            case 'Database': return <Database size={28} />;
            case 'TrendingUp': return <TrendingUp size={28} />;
            case 'ShoppingBag': return <ShoppingBag size={28} />;
            case 'Factory': return <Factory size={28} />;
            case 'Scale': return <Scale size={28} />;
            case 'Clapperboard': return <Clapperboard size={28} />;
            default: return <Zap size={28} />;
        }
    };

    return (
        <div className="bg-neutral-950">
            {/* 1. HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <img src={content.heroImage} alt={content.title} className={styles.heroImg} />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        {content.category && (
                            <div className={styles.badge}>
                                <Zap size={14} /> <span>{content.category}</span>
                            </div>
                        )}
                        <h1 className={styles.title}>{content.title}</h1>
                        <p className={styles.subtitle}>{content.subtitle}</p>

                        <div className={styles.ctaGroup}>
                            <Link to="/contact" className={styles.btnPrimary}>Get Started <ArrowRight size={18} /></Link>
                            <Link to="/company" className={styles.btnSecondary}>View Case Studies</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. OVERVIEW SECTION (Slate) */}
            <section className={`${styles.section} ${styles.bgSlate}`}>
                <div className={styles.container}>
                    <div className={styles.overviewGrid}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className={styles.overviewTitle}>Executive Overview</h2>
                            <p className={styles.overviewText}>{content.overview.text}</p>
                            <div className={styles.benefitList}>
                                {content.overview.benefits?.map((benefit, idx) => (
                                    <div key={idx} className={styles.benefitItem}>
                                        <CheckCircle2 className={styles.checkIcon} size={20} />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className={styles.overviewImageWrapper}>
                            <img src={content.overview.image} alt="Overview" className={styles.overviewImage} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. FEATURES GRID (Navy Gradient) */}
            <section className={`${styles.section} ${styles.bgGradient}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Key Capabilities</h2>
                        <p className={styles.sectionDesc}>Engineered for enterprise scale, security, and performance.</p>
                    </div>

                    <div className={styles.featuresGrid}>
                        {content.features?.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.featureCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className={styles.featureIcon}>{getIcon(feature.icon)}</div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDesc}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3.1 ROI ANALYSIS (Slate) */}
            {content.roi && (
                <section className={`${styles.section} ${styles.bgSlate}`}>
                    <div className={styles.container}>
                        <div className={styles.roiGrid}>
                            <motion.div className={styles.roiContent} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <h3>{content.roi.title}</h3>
                                <p>{content.roi.description}</p>
                                <div className={styles.roiStats}>
                                    {content.roi.stats.map((stat, idx) => (
                                        <div key={idx} className={styles.roiStatItem}>
                                            <div className={styles.roiStatHeader}>
                                                <span>{stat.label}</span>
                                                <span className={styles.roiStatValue} style={{ color: stat.color }}>
                                                    {stat.prefix}{stat.value}{stat.suffix}
                                                </span>
                                            </div>
                                            <div className={styles.chartContainer}>
                                                <motion.div
                                                    className={styles.chartBar}
                                                    style={{ backgroundColor: stat.color }}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${stat.value}%` }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <div className={styles.roiImageWrapper}>
                                {/* Using a chart-like abstract image if no specific image provided */}
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                                    alt="ROI Analytics"
                                    className={`${styles.overviewImage} ${styles.rounded}`}
                                    style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 3.2 USE CASES (Navy) */}
            {content.useCases && (
                <section className={`${styles.section} ${styles.bgNavy}`}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Strategic Use Cases</h2>
                            <p className={styles.sectionDesc}>High-impact scenarios where our AI drives value.</p>
                        </div>
                        <div className={styles.useCasesGrid}>
                            {content.useCases.map((useCase, idx) => (
                                <motion.div
                                    key={idx}
                                    className={styles.useCaseCard}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                                    <p className={styles.useCaseDesc}>{useCase.description}</p>
                                    <div className={styles.useCaseTags}>
                                        {useCase.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className={styles.useCaseTag}>{tag}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 4. TECH STACK CAROUSEL (Dark) */}
            <section className={`${styles.bgDark}`} style={{ padding: '3rem 0' }}>
                <div className={styles.container} style={{ marginBottom: '2rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#94A3B8', fontSize: '1.25rem', fontWeight: 500 }}>Powered by Best-in-Class Technology</h3>
                </div>
                <div className={styles.carousel}>
                    <div className={styles.carouselTrack}>
                        {/* Double the list for seamless loop - ensuring unique keys */}
                        {[...content.techStack, ...content.techStack].map((tech, idx) => (
                            <div key={idx} className={styles.carouselItem}>
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className={styles.techIcon}
                                    style={['Anthropic', 'OpenAI', 'Vercel'].includes(tech.name) ? { filter: 'brightness(0) invert(1)' } : {}}
                                    onError={(e) => {
                                        e.target.style.display = 'none'; // Hide broken image
                                        // Optional: Add a text fallback
                                    }}
                                />
                                <span className={styles.techName}>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PROCESS SECTION (Slate) */}
            <section className={`${styles.section} ${styles.bgSlate}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Integration Methodology</h2>
                        <p className={styles.sectionDesc}>A systematic, proven approach to value delivery.</p>
                    </div>

                    <div className={styles.processList}>
                        {content.process?.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.processStep}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.processContent}>
                                    <div className={styles.processNumber}>0{step.step}</div>
                                    <h3 className={styles.processTitle}>{step.title}</h3>
                                    <p className={styles.processDesc}>{step.description}</p>
                                </div>
                                <div className={styles.processImgWrapper}>
                                    <img src={step.image} alt={step.title} className={styles.processImg} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5.1 INDUSTRIES (Gradient) */}
            {content.industries && (
                <section className={`${styles.section} ${styles.bgGradient}`}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Industries We Serve</h2>
                            <p className={styles.sectionDesc}>Tailored solutions for sector-specific challenges.</p>
                        </div>
                        <div className={styles.industriesGrid}>
                            {content.industries.map((industry, idx) => (
                                <motion.div
                                    key={idx}
                                    className={styles.industryCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className={styles.industryIcon}>
                                        {getIcon(industry.icon)}
                                    </div>
                                    <h4 className={styles.industryName}>{industry.name}</h4>
                                    <p className={styles.industryDesc}>{industry.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 5.2 MARKET TRENDS (Navy) */}
            {content.marketTrends && (
                <section className={`${styles.section} ${styles.bgNavy}`}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>{content.marketTrends.title}</h2>
                            <p className={styles.sectionDesc}>{content.marketTrends.description}</p>
                        </div>
                        <div className={styles.trendChartWrapper}>
                            <div className={styles.trendChart}>
                                {content.marketTrends.series.map((item, idx) => (
                                    <div key={idx} className={styles.trendBarGroup}>
                                        <div className={styles.trendValue}>{item.value}%</div>
                                        <motion.div
                                            className={styles.trendBar}
                                            initial={{ height: 0 }}
                                            style={{
                                                background: `linear-gradient(180deg, ${item.color || '#60A5FA'} 0%, rgba(255, 255, 255, 0.05) 100%)`,
                                                boxShadow: `0 0 20px ${item.color}40`
                                            }}
                                            whileInView={{ height: `${item.value}%` }}
                                            transition={{ duration: 1, delay: idx * 0.2 }}
                                            viewport={{ once: true }}
                                        />
                                        <div className={styles.trendLabel}>{item.label}</div>
                                        <div className={styles.trendLabel} style={{ color: '#60A5FA', marginTop: '4px' }}>{item.year}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 5.3 COMPARISON TABLE (Slate) */}
            {content.comparison && (
                <section className={`${styles.section} ${styles.bgSlate}`}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>{content.comparison.title}</h2>
                        </div>
                        <div className={styles.comparisonContainer}>
                            <table className={styles.compTable}>
                                <thead>
                                    <tr>
                                        {content.comparison.headers.map((header, idx) => (
                                            <th key={idx}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {content.comparison.rows.map((row, idx) => (
                                        <tr key={idx}>
                                            <td>{row.feature}</td>
                                            <td>{row.us}</td>
                                            <td>{row.others}</td>
                                            <td>{row.saas}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            {/* 6. STATS SECTION (Parallax) */}
            <section className={`${styles.section} ${styles.stats}`}>
                <div className={styles.statsOverlay} />
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {content.stats?.map((stat, idx) => (
                            <div key={idx}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6.1 TESTIMONIALS (Dark) */}
            {content.testimonials && (
                <section className={`${styles.section} ${styles.bgDark}`}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
                        </div>
                        <div className={styles.testimonialsGrid}>
                            {content.testimonials.map((testi, idx) => (
                                <motion.div
                                    key={idx}
                                    className={styles.testimonialCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className={styles.quoteIcon}><Zap size={24} /></div>
                                    <p className={styles.testimonialText}>"{testi.quote}"</p>
                                    <div className={styles.testimonialAuthor}>
                                        <img src={testi.image} alt={testi.author} className={styles.authorImg} />
                                        <div className={styles.authorInfo}>
                                            <h5>{testi.author}</h5>
                                            <span>{testi.role}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 7. FAQ SECTION (Gradient) */}
            <section className={`${styles.section} ${styles.bgGradient}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    </div>
                    <div className={styles.faqGrid}>
                        {content.faq?.map((item, idx) => (
                            <div key={idx} className={styles.faqItem}>
                                <h4 className={styles.faqQuestion}>{item.question}</h4>
                                <p className={styles.faqAnswer}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CTA SECTION (Vibrant) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.ctaBox}>
                        <h2 className={styles.ctaTitle}>Ready to Scale?</h2>
                        <p className={styles.ctaText}>Connect with our specialized consultants to discuss your unique challenges.</p>
                        <Link to="/contact" className={styles.btnPrimary}>Schedule Consultation <ChevronRight size={20} /></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
