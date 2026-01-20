'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: "Apakah saya harus punya background IT untuk ikut program ini?",
        answer: "Tidak sama sekali. Program ini dirancang khusus untuk EXECUTIVE. Kita tidak akan belajar coding. Kita akan fokus pada bagaimana menggunakan AI (seperti ChatGPT, Claude, atau Perplexity) sebagai asisten strategis untuk berpikir, menganalisa, dan memutuskan lebih cepat."
    },
    {
        question: "Tool AI apa saja yang akan dipelajari?",
        answer: "Fokus utama adalah pada Large Language Models paling canggih saat ini: ChatGPT (OpenAI), Claude (Anthropic), dan Perplexity untuk riset. Kami juga akan membocorkan beberapa tools spesifik untuk talent analytics dan data visualization yang praktis."
    },
    {
        question: "Apakah program ini hanya teori?",
        answer: "100% Praktis. Anda diwajibkan membawa laptop karena 70% waktu akan digunakan untuk praktik langsung menggunakan study case nyata atau bahkan data pekerjaan Anda sendiri (dengan tetap menjaga kerahasiaan)."
    },
    {
        question: "Bagaimana jika saya merasa tidak cocok setelah ikut hari pertama?",
        answer: "Kami memberikan Jaminan Kepuasan 100%. Jika setelah hari pertama Anda merasa program ini tidak memberikan value sesuai ekspektasi, Anda bisa meminta Full Refund tanpa pertanyaan apapun."
    },
    {
        question: "Apakah ada group alumni setelah workshop?",
        answer: "Ya, Anda akan dimasukkan ke dalam Exclusive Executive AI Circle untuk update prompt terbaru, diskusi kasus, dan networking sesama leader yang sudah mengimplementasikan AI."
    }
];

export default function FAQ() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={styles.section} ref={ref} id="faq">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <p className={styles.subtitle}>Segala hal yang ingin Anda ketahui tentang program ini</p>
                </motion.div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                className={styles.question}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    className={styles.answer}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                >
                                    <p>{faq.answer}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
