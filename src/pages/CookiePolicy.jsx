import React, { useEffect } from 'react';
import styles from './ServicePage.module.css';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-neutral-950 min-h-screen pb-20 text-neutral-300">
            {/* HERO */}
            <section className={styles.hero} style={{ minHeight: '40vh' }}>
                <div className={styles.heroBackground}>
                    <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000" alt="Cookies" className={styles.heroImg} />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Cookie Policy</h1>
                    <p className={styles.subtitle}>Understanding how we use cookies to improve your experience.</p>
                </div>
            </section>

            <div className={`container mx-auto px-6 max-w-4xl mt-12 ${styles.contentContainer}`}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
                    <p className="mb-8 text-sm text-neutral-400 font-mono tracking-widest uppercase">Last Updated: October 2025</p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">1. What Are Cookies?</h2>
                            <p className="leading-relaxed text-lg text-neutral-300">
                                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                                They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                                Think of them as the memory of the web—helping us recognize you as a returning visitor.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">2. How We Use Cookies</h2>
                            <div className="grid gap-4">
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <strong className="text-blue-400 block mb-1">Essential Cookies</strong>
                                    <span className="text-neutral-400">Necessary for the website to function. You cannot switch these off.</span>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <strong className="text-green-400 block mb-1">Performance Cookies</strong>
                                    <span className="text-neutral-400">Help us understand how visitors interact with the site by collecting anonymous info.</span>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <strong className="text-purple-400 block mb-1">Functional Cookies</strong>
                                    <span className="text-neutral-400">Enable enhanced functionality and personalization (e.g., live chat).</span>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">3. Managing Preferences</h2>
                            <p className="leading-relaxed text-lg text-neutral-300 mb-4">
                                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer
                                and you can set most browsers to prevent them from being placed.
                            </p>
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition">
                                My Cookie Preferences
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
