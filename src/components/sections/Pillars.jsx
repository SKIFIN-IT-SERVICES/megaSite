import React from 'react';
import styles from './Pillars.module.css';

const pillars = [
    {
        title: "Cloud Infrastructure",
        description: "Scalable, resilient architectures designed for the hybrid enterprise.",
        icon: "☁️",
        accent: "blue"
    },
    {
        title: "Data Intelligence",
        description: "Turning raw information into strategic assets with advanced analytics.",
        icon: "📊",
        accent: "purple"
    },
    {
        title: "AI & Automation",
        description: "Deploying generative agents that redefine operational efficiency.",
        icon: "🤖",
        accent: "orange"
    },
    {
        title: "Cyber Resilience",
        description: "Proactive threat defense embedded into every layer of your stack.",
        icon: "🛡️",
        accent: "teal" // A new accent for security
    }
];

const Pillars = () => {
    return (
        <section className={`section ${styles.pillarsSection}`} id="capabilities">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>The Architecture of Success</h2>
                    <p className={styles.sectionLead}>
                        We build on four foundational pillars to ensure your digital transformation
                        is robust, scalable, and future-proof.
                    </p>
                </div>

                <div className={styles.grid}>
                    {pillars.map((pillar, index) => (
                        <div key={index} className={`${styles.card} ${styles[pillar.accent]}`}>
                            <div className={styles.iconWrapper}>{pillar.icon}</div>
                            <h3 className={styles.cardTitle}>{pillar.title}</h3>
                            <p className={styles.cardDesc}>{pillar.description}</p>
                            <a href="#" className={styles.cardLink}>Explore Capabilties &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
