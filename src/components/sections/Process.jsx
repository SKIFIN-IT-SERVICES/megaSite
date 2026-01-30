import React from 'react';
import styles from './Process.module.css';

const steps = [
    {
        phase: "01",
        title: "Discovery & Strategy",
        desc: "Mapping your business landscape to identify high-impact AI/Digital use cases.",
        icon: "🧭"
    },
    {
        phase: "02",
        title: "Architecture & Design",
        desc: "Creating 'Policy-as-Code' blueprints ensuring security and scalability.",
        icon: "📐"
    },
    {
        phase: "03",
        title: "Agile Engineering",
        desc: "Sprints led by Agentic AI tools to compress dev timelines by 60%.",
        icon: "⚡"
    },
    {
        phase: "04",
        title: "Precision QA",
        desc: "Automated, 24/7 testing cycles ensuring zero-defect deployments.",
        icon: "✅"
    },
    {
        phase: "05",
        title: "Deploy & Modernize",
        desc: "Seamless CI/CD rollouts with continuous performance optimization.",
        icon: "🚀"
    },
    {
        phase: "06",
        title: "Build-Operate-Scale",
        desc: "Building self-sustaining innovation ecosystems (GCCs) for long-term value.",
        icon: "📈"
    }
];

const Process = () => {
    return (
        <section className={`section ${styles.processSection}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Our Methodology</span>
                    <h2 className={styles.title}>The Engineering Lifecycle</h2>
                    <p className={styles.subtitle}>
                        From concept to global scale, our AI-enhanced workflow ensures speed,
                        precision, and predictable outcomes.
                    </p>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.phase}>{step.phase}</div>
                            <div className={styles.icon}>{step.icon}</div>
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                            <p className={styles.cardDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
