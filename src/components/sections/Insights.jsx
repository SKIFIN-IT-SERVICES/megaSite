import React from 'react';
import styles from './Insights.module.css';

const articles = [
    {
        tag: "Whitepaper",
        title: "The State of Generative AI 2026",
        desc: "From chatbots to autonomous agents: A guide for the enterprise CTO.",
        date: "Jan 28, 2026"
    },
    {
        tag: "Guide",
        title: "The Insurance Analytics Stack",
        desc: "Future-proofing BI investments with modern data lake architectures.",
        date: "Jan 15, 2026"
    },
    {
        tag: "Report",
        title: "Driving Automotive Intelligence",
        desc: "How AI forecasting is revolutionizing global supply chain logistics.",
        date: "Dec 10, 2025"
    },
    {
        tag: "Strategy",
        title: "The Multi-Cloud Migration Guide",
        desc: "Why 'Exit Strategies' are now as important as 'Onboarding'.",
        date: "Nov 22, 2025"
    },
    {
        tag: "IoT",
        title: "From Connected to Intelligent",
        desc: "The evolution of Smart Homes and the role of Edge Computing.",
        date: "Nov 05, 2025"
    },
    {
        tag: "Data",
        title: "The Data Lake Revolution",
        desc: "Unleashing the power of Delta Lake for real-time spatial analytics.",
        date: "Oct 18, 2025"
    }
];

const Insights = () => {
    return (
        <section className={`section ${styles.insightsSection}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Thought Leadership</span>
                    <h2 className={styles.title}>Latest Insights</h2>
                </div>

                <div className={styles.grid}>
                    {articles.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardMeta}>
                                <span className={styles.tag}>{item.tag}</span>
                                <span className={styles.date}>{item.date}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                            <a href="#" className={styles.link}>Read Article &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insights;
