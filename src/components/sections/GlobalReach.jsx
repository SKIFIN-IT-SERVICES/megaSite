import React from 'react';
import styles from './GlobalReach.module.css';

const locations = [
    { city: "Noida, India", role: "Global HQ & AI Labs", cap: "Cloud, Innovation", flag: "🇮🇳" },
    { city: "Plano, USA", role: "North American HQ", cap: "Strategy, Consulting", flag: "🇺🇸" },
    { city: "Warsaw, Poland", role: "EU Engineering Hub", cap: "Automotive, Mfg", flag: "🇵🇱" },
    { city: "Bucharest, Romania", role: "Nearshore Center", cap: "Modernization, UX", flag: "🇷🇴" },
    { city: "Pune, India", role: "Data Excellence Center", cap: "Big Data, Analytics", flag: "🇮🇳" },
    { city: "Hampshire, UK", role: "UK Delivery Center", cap: "Public Sector, Gov", flag: "🇬🇧" },
    { city: "Toronto, Canada", role: "IoT Innovation Lab", cap: "Smart Home, Edge", flag: "🇨🇦" },
    { city: "Chisinau, Moldova", role: "Managed Services", cap: "Quality Eng, DevOps", flag: "🇲🇩" },
];

const GlobalReach = () => {
    return (
        <section className={`section ${styles.globalSection}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Global Delivery Network</span>
                    <h2 className={styles.title}>Where We Deliver</h2>
                    <p className={styles.subtitle}>
                        A "Follow-the-Sun" operational model with 18+ delivery centers ensuring
                        resilience and proximity to your business.
                    </p>
                </div>

                <div className={styles.grid}>
                    {locations.map((loc, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.flag}>{loc.flag}</div>
                            <div className={styles.details}>
                                <h3 className={styles.city}>{loc.city}</h3>
                                <span className={styles.role}>{loc.role}</span>
                                <p className={styles.cap}>Focus: {loc.cap}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
