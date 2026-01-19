'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './FAQ.module.css';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'Apakah saya harus punya background IT?',
        answer: 'Sama sekali TIDAK. Program ini dirancang untuk Executive dan Leader. Kami tidak mengajarkan coding. Kami mengajarkan LOGIKA dan STRATEGI penggunaan AI untuk membantu pekerjaan harian Anda.'
    },
    {
        question: 'Apakah program ini menggunakan tool berbayar?',
        answer: 'Kami akan mendemokan penggunaan ChatGPT versi Gratis dan Berbayar. Anda bisa mulai dengan versi gratis, namun kami sangat menyarankan investasi di versi Plus untuk hasil maksimal.'
    },
    {
        question: 'Apa bedanya dengan workshop AI lainnya?',
        answer: 'Mayoritas workshop AI lain fokus pada marketing atau content creation. Kami fokus pada EXECUTIVE LEADERSHIP: Analisa Data, Problem Solving, dan Strategic Planning.'
    },
    {
        question: 'Apakah ada pendampingan setelah 2 hari?',
        answer: 'Ya! Anda akan dimasukkan ke dalam Alumni Group di mana Anda bisa bertanya dan mendapatkan update terbaru seiring dengan perkembangan teknologi AI.'
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className={styles.section} ref={ref} id="faq">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Pertanyaan yang Sering Ditanyakan</h2>
                    <p>Semua yang perlu Anda ketahui tentang program ini</p>
                </motion.div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                className={styles.question}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={styles.answerWrapper}
                                    >
                                        <div className={styles.answer}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
