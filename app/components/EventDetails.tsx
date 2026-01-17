'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './EventDetails.module.css';
import { Calendar, MapPin, Clock, AlertTriangle } from 'lucide-react';

export default function EventDetails() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className={styles.section} ref={ref} id="schedule">
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>Jadwal Program</h2>
                    <p className={styles.subtitle}>Catat tanggalnya dan pastikan kehadiran Anda di program intensif ini</p>

                    <div className={styles.eventGrid}>
                        <div className={styles.infoCard}>
                            <Calendar className={styles.icon} />
                            <div>
                                <div className={styles.infoLabel}>Tanggal</div>
                                <div className={styles.infoValue}>24-25 Februari 2026</div>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <MapPin className={styles.icon} />
                            <div>
                                <div className={styles.infoLabel}>Lokasi</div>
                                <div className={styles.infoValue}>Grand Mercure, Jakarta</div>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <Clock className={styles.icon} />
                            <div>
                                <div className={styles.infoLabel}>Waktu</div>
                                <div className={styles.infoValue}>09:00 - 16:00 WIB</div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className={styles.urgency}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <AlertTriangle size={24} className={styles.alertIcon} />
                        <div>
                            <strong>Early Bird berakhir 1 Februari 2026</strong>
                            <p>Kuota terbatas hanya untuk 30 peserta per batch</p>
                        </div>
                    </motion.div>

                    <div className={styles.ctaWrapper}>
                        <button className="btn btn-primary" onClick={() => {
                            document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Daftar Sekarang - Amankan Kursi Anda
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
