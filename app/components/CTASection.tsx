'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './CTASection.module.css';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleCTAClick = () => {
        document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className={styles.headline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
<<<<<<< HEAD
                        Yakin Tidak <span className="gradient-text">Mulai Sekarang?</span>
=======
                        Jika Anda Merasa <span className="gradient-text">Kewalahan</span> dengan Semua Ini...
>>>>>>> d14c479 (Revise landing page copy, structure, and aesthetics based on feedback)
                    </motion.h2>

                    <motion.p
                        className={styles.subtext}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
<<<<<<< HEAD
                        Jangan biarkan leader lain mendahului Anda dengan penguasaan AI yang lebih cepat.
=======
                        Anda tidak sendirian. Ratusan executive mengalami hal yang sama.
>>>>>>> d14c479 (Revise landing page copy, structure, and aesthetics based on feedback)
                    </motion.p>

                    <motion.div
                        className={styles.ctaWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button
                            className="btn btn-primary"
<<<<<<< HEAD
                            onClick={() => {
                                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Daftar Sekarang Juga
=======
                            onClick={handleCTAClick}
                        >
                            Saya Siap Menjadi Leader Berbasis AI
>>>>>>> d14c479 (Revise landing page copy, structure, and aesthetics based on feedback)
                            <ArrowRight className={styles.arrowIcon} />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
