import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const slides = [
    {
        id: 1,
        title: "Accelerating Digital Transformation",
        subtitle: "We build the intelligent systems that power the Fortune 500.",
        cta: "Explore Solutions",
        theme: "blue"
    },
    {
        id: 2,
        title: "AI-First Data Engineering",
        subtitle: "Turning complex data streams into actionable enterprise insights.",
        cta: "View Case Studies",
        theme: "purple"
    },
    {
        id: 3,
        title: "Trusted by Global Leaders",
        subtitle: "Delivering compliance, security, and scale at the speed of innovation.",
        cta: "Partner With Us",
        theme: "orange"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Background/Ken Burns Layers */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.bgLayer} ${index === currentSlide ? styles.active : ''} ${styles[slide.theme]}`}
                />
            ))}

            {/* Overlay to dim background */}
            <div className={styles.overlay} />

            <div className={`container ${styles.contentContainer}`}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.textContent} ${index === currentSlide ? styles.activeText : ''}`}
                    >
                        <h1 className={styles.title}>{slide.title}</h1>
                        <p className={styles.subtitle}>{slide.subtitle}</p>
                        <div className={styles.ctaWrapper}>
                            <button className="btn btn-primary">{slide.cta}</button>
                            <button className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff', marginLeft: '1rem' }}>
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}

                {/* Indicators */}
                <div className={styles.indicators}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
