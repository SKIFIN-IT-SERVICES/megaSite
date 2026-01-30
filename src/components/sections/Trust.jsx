import React from 'react';
import styles from './Trust.module.css';

const partners = [
    "Acme Corp", "GlobalBank", "Vertex Systems", "Stratos AI", "Nexus Group", "Orion Tech"
];

const Trust = () => {
    return (
        <section className={styles.trustSection}>
            <div className={`container ${styles.container}`}>
                <p className={styles.label}>Trusted by industry leaders</p>
                <div className={styles.grid}>
                    {partners.map((partner, index) => (
                        <div key={index} className={styles.partner}>
                            {/* Placeholder text acting as logo for demo */}
                            <span className={styles.logoText}>{partner}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
