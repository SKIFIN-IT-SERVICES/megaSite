import React from 'react';
import styles from './AIUseCases.module.css';

const useCases = [
    {
        title: "Agentic Workflow Automation",
        desc: "Deploy autonomous AI agents that handle multi-step business processes, reducing manual overhead in operations by up to 60%.",
        category: "Automation"
    },
    {
        title: "Predictive Supply Chain",
        desc: "Real-time demand forecasting and inventory optimization using ML to prevent stockouts and minimize logistics costs.",
        category: "Logistics"
    },
    {
        title: "Intelligent Customer Support",
        desc: "Advanced GenAI conversational agents providing context-aware, human-like support across 50+ languages 24/7.",
        category: "CX"
    },
    {
        title: "AI-Driven Fraud Detection",
        desc: "Real-time anomaly detection in financial transactions using deep learning to identify and block fraudulent activities.",
        category: "Fintech"
    },
    {
        title: "Zero-Trust Cybersecurity",
        desc: "Integrating AI-powered threat hunting into zero-trust architectures to proactively neutralize zero-day vulnerabilities.",
        category: "Security"
    },
    {
        title: "Intelligent Doc Processing",
        desc: "Automated extraction and validation of data from unstructured documents (legal, medical) using NLP and OCR.",
        category: "Operations"
    },
    {
        title: "Omni-channel Personalization",
        desc: "Utilizing AI to segment audiences and generate tailored content at scale, increasing conversion rates by 35%.",
        category: "Marketing"
    },
    {
        title: "Cloud-Native AI Scaling",
        desc: "Predictive resource allocation for Azure/AWS environments, ensuring peak performance while optimizing cloud spend.",
        category: "Cloud"
    }
];

const AIUseCases = () => {
    return (
        <section className={`section ${styles.useCasesSection}`} id="solutions">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Enterprise Applications</span>
                    <h2 className={styles.title}>Real-World AI Solutions</h2>
                    <p className={styles.subtitle}>
                        From predictive analytics to autonomous agents, our solutions are driving value
                        across the Fortune 500 landscape.
                    </p>
                </div>

                <div className={styles.grid}>
                    {useCases.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.category}>{item.category}</span>
                                <div className={styles.icon}>→</div>
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                            <div className={styles.cardFooter}>
                                <a href="#" className={styles.link}>Explore Solution</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIUseCases;
