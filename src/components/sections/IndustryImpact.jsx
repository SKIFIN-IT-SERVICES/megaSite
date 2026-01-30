import React from 'react';
import styles from './IndustryImpact.module.css';

const verticals = [
    {
        id: "healthcare",
        sector: "Healthcare & Life Sciences",
        title: "AI-Accelerated Generative Molecular Design",
        techDetail: "Utilizing Transformer-based architectures trained on chemical SMILES strings and Graph Neural Networks (GNNs) to predict molecular binding affinities. Our Diffusion Models for protein folding simulate interactions to generate novel 'hit' molecules.",
        impact: "80%",
        impactDesc: "Acceleration in hit-to-lead drug discovery cycles",
        caseStudy: "Inspired by Insilico Medicine's Phase II Success"
    },
    {
        id: "bfsi",
        sector: "BFSI (Banking & Finance)",
        title: "Cognitive AML & Real-time Fraud Orchestration",
        techDetail: "Deploying Temporal Convolutional Networks (TCNs) and LSTMs to analyze multi-dimensional transaction streams. Federated Learning trains models across disparate datasets without compromising PII, ensuring Basel IV compliance.",
        impact: "45%",
        impactDesc: "Reduction in false-positive AML alerts globally",
        caseStudy: "Modeled after JPMorgan COiN Platform"
    },
    {
        id: "manufacturing",
        sector: "Manufacturing 4.0",
        title: "Predictive Maintenance via Cognitive Digital Twins",
        techDetail: "Integrating Edge AI sensors with Cloud Digital Twins. High-frequency vibration data is processed via Attention-based Anomaly Detection models to predict 'Remaining Useful Life' (RUL) of critical assets involved in the assembly line.",
        impact: "35%",
        impactDesc: "Reduction in unplanned factory downtime",
        caseStudy: "Benchmark: Siemens Amberg Lighthouse Factory"
    }
];

const IndustryImpact = () => {
    return (
        <section className={`section ${styles.impactSection}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Deep Dive</span>
                    <h2 className={styles.sectionTitle}>Vertical Impact Reports</h2>
                    <p className={styles.sectionLead}>
                        Detailed analysis of how our proprietary algorithms are reshaping specific industries at the fundamental level.
                    </p>
                </div>

                <div className={styles.verticalsList}>
                    {verticals.map((v, index) => (
                        <div key={index} className={styles.verticalRow}>
                            <div className={styles.contentCol}>
                                <span className={styles.sectorLabel}>{v.sector}</span>
                                <h3 className={styles.rowTitle}>{v.title}</h3>
                                <div className={styles.techBlock}>
                                    <h4 className={styles.techHeader}>Technical Specification:</h4>
                                    <p className={styles.techText}>{v.techDetail}</p>
                                </div>
                                <div className={styles.caseStudy}>
                                    <strong>Case Reference:</strong> {v.caseStudy}
                                </div>
                            </div>

                            <div className={styles.statCol}>
                                <div className={styles.statCard}>
                                    <span className={styles.statNumber}>{v.impact}</span>
                                    <p className={styles.statDesc}>{v.impactDesc}</p>
                                    <div className={styles.statGraph}>
                                        {/* Abstract simple CSS bar chart representation */}
                                        <div className={styles.bar} style={{ height: '40%' }}></div>
                                        <div className={styles.bar} style={{ height: '60%' }}></div>
                                        <div className={styles.bar} style={{ height: '100%', background: 'var(--color-accent)' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryImpact;
