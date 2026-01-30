import React from 'react';
import styles from './Testimonials.module.css';

const quotes = [
    {
        text: "R Systems transformed our legacy infrastructure into a cloud-native powerhouse, reducing our TCO by 30% within the first year.",
        author: "CTO",
        company: "Global Automotive OEM"
    },
    {
        text: "Their AI-powered forecasting increased our operational efficiency by 25%. A true strategic partner in our digital journey.",
        author: "Head of Data Science",
        company: "Leading BFSI Firm"
    },
    {
        text: "The seamless migration of our monolithic systems was done with zero disruption to our 5M+ global users. Remarkable precision.",
        author: "VP of Engineering",
        company: "SaaS Platform"
    },
    {
        text: "A cultural fit as much as a technical one. Their co-creation model feels like an extension of our own team's DNA.",
        author: "CEO",
        company: "HealthTech Innovator"
    }
];

const Testimonials = () => {
    return (
        <section className={`section ${styles.testSection}`}>
            <div className="container">
                <h2 className={styles.title}>Client Success</h2>
                <div className={styles.grid}>
                    {quotes.map((q, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>“</div>
                            <p className={styles.text}>{q.text}</p>
                            <div className={styles.meta}>
                                <span className={styles.author}>{q.author}</span>
                                <span className={styles.company}>{q.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
