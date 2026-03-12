import React from 'react';
import styles from './ElectricalSupplies.module.css';

const products = [
    {
        id: 'switchgear',
        title: 'LV & HV Switchgear',
        description: 'Advanced power distribution and control systems for industrial plants and marine vessels.',
        icon: '⚡',
        features: ['Up to 36kV', 'Modular Design', 'Arc-Flash Protection']
    },
    {
        id: 'cables',
        title: 'Specialized Cables',
        description: 'High-performance marine and offshore cables designed for extreme environments and durability.',
        icon: '🔗',
        features: ['Flame Retardant', 'LSZH', 'Oil Resistant']
    },
    {
        id: 'instrumentation',
        title: 'Control & Instrumentation',
        description: 'Precise monitoring and control solutions for complex industrial processes and automation.',
        icon: '📟',
        features: ['PLC Systems', 'SCADA Integration', 'Remote Monitoring']
    },
    {
        id: 'lighting',
        title: 'Industrial Lighting',
        description: 'Explosion-proof and high-efficiency LED lighting solutions for hazardous and marine areas.',
        icon: '💡',
        features: ['ATEX Certified', 'IP67 Rated', 'Energy Efficient']
    }
];

const ElectricalSupplies = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.title}>Electrical <span className={styles.accent}>Solutions</span></h2>
                    <p className={styles.subtitle}>
                        Leading provider of mission-critical electrical components for Marine, Industrial, and Infrastructure projects.
                    </p>
                </div>

                <div className={styles.grid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{product.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{product.title}</h3>
                            <p className={styles.cardDesc}>{product.description}</p>
                            <ul className={styles.featureList}>
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <span className={styles.bullet}>→</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={styles.cta}>Technical Specs</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ElectricalSupplies;
