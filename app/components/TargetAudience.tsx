'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './TargetAudience.module.css';
import { Users, Briefcase, TrendingUp } from 'lucide-react';

const audiences = [
    {
        icon: <Users className={styles.icon} />,
        title: 'Business Owners & Entrepreneurs',
        description: 'Pemilik bisnis yang ingin mengoptimalkan sistem dan pengambilan keputusan strategis tanpa harus terjebak hal teknis.'
    },
    {
        icon: <Briefcase className={styles.icon} />,
        title: 'C-Level & Executives',
        description: 'CEO, COO, CFO, dan jajaran eksekutif lainnya yang membutuhkan AI sebagai Strategic Assistant untuk analisa data cepat.'
    },
    {
        icon: <TrendingUp className={styles.icon} />,
        title: 'Managers & Department Heads',
        description: 'Pemimpin departemen yang ingin meningkatkan produktivitas tim dan efisiensi operasional melalui AI.'
    }
];

export default function TargetAudience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className={styles.section} ref={ref} id="target">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.tagline}>SIAPA YANG HARUS IKUT?</span>
                    <h2>Program Ini Dirancang Khusus Untuk:</h2>
                </motion.div>

                <div className={styles.grid}>
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {audience.icon}
                            </div>
                            <h3>{audience.title}</h3>
                            <p>{audience.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
