'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Introduction.module.css';
import { ArrowRight } from 'lucide-react';

export default function Introduction() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.questionWrapper}>
                        <h3 className={styles.question}>Apakah Anda ingin tahu solusinya?</h3>
                        <div className={styles.questionDivider}></div>
                    </div>

                    <h2 className={styles.title}>Inilah Solusinya:</h2>
                    <p className={styles.description}>
                        <strong>Executive Strategic Leadership with AI</strong> adalah program praktis 2 hari yang dirancang khusus untuk <strong>EXECUTIVE</strong> yang ingin menggunakan AI sebagai <strong>ASSISTANT STRATEGIS</strong> — bukan untuk coding atau hal teknis, tapi untuk <strong>MENINGKATKAN KUALITAS KEPUTUSAN ANDA</strong> dalam waktu yang jauh lebih cepat.
                    </p>

                    <div className={styles.pillarLink}>
                        Anda akan belajar menggunakan AI untuk <span className="gradient-text">4 Pilar Kepemimpinan Eksekutif</span>:
                        <br />
                        <div className={styles.pillarFlow}>
                            <div className={styles.pillarItem}>
                                <span>Analisa Data</span>
                                <ArrowRight size={20} className={styles.arrowIcon} />
                            </div>
                            <div className={styles.pillarItem}>
                                <span>Problem Solving</span>
                                <ArrowRight size={20} className={styles.arrowIcon} />
                            </div>
                            <div className={styles.pillarItem}>
                                <span>Decision Making</span>
                                <ArrowRight size={20} className={styles.arrowIcon} />
                            </div>
                            <div className={styles.pillarItem}>
                                <span>Strategic Planning</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
