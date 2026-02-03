import React, { useEffect } from 'react';
import styles from './ServicePage.module.css';

const Accessibility = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-neutral-950 min-h-screen pb-20 text-neutral-300">
            {/* HERO */}
            <section className={styles.hero} style={{ minHeight: '40vh' }}>
                <div className={styles.heroBackground}>
                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" alt="Accessibility" className={styles.heroImg} />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Accessibility</h1>
                    <p className={styles.subtitle}>Commitment to digital inclusion for everyone.</p>
                </div>
            </section>

            <div className={`container mx-auto px-6 max-w-4xl mt-12 ${styles.contentContainer}`}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Our Commitment</h2>
                            <p className="leading-relaxed text-lg text-neutral-300">
                                MegaSite is committed to ensuring digital accessibility for people with disabilities.
                                We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                                Innovation is only truly innovative if it includes everyone.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Conformance Status</h2>
                            <div className="flex items-start gap-4 p-6 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                <div className="text-blue-400 font-bold text-xl">AA</div>
                                <div>
                                    <p className="text-neutral-300 leading-relaxed">
                                        The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities.
                                        It defines three levels of conformance: Level A, Level AA, and Level AAA.
                                        <strong className="text-white block mt-2">MegaSite is partially conformant with WCAG 2.1 level AA.</strong>
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Feedback</h2>
                            <p className="text-neutral-300 mb-6">We welcome your feedback on the accessibility of MegaSite. Please let us know if you encounter accessibility barriers:</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <h4 className="text-sm text-neutral-400 uppercase tracking-widest mb-1">Phone</h4>
                                    <p className="text-white font-medium">+1 (800) 123-4567</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <h4 className="text-sm text-neutral-400 uppercase tracking-widest mb-1">Email</h4>
                                    <p className="text-white font-medium">accessibility@megasite.com</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5 md:col-span-2">
                                    <h4 className="text-sm text-neutral-400 uppercase tracking-widest mb-1">Address</h4>
                                    <p className="text-white font-medium">1 World Trade Center, Suite 4500, New York, NY</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessibility;
