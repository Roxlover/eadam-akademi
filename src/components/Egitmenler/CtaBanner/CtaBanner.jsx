"use client";

import styles from './CtaBanner.module.css';
import { ShieldCheck } from 'lucide-react';

const CtaBanner = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Eğitim Almak İster misiniz?</h2>
                    <p className={styles.description}>
                        Dijital geleceği birlikte inşa edelim. Başvurunuzu yapın,
                        ekibimize katılın.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <ShieldCheck size={18} className={styles.icon} />
                            <span>Sertifikalı Eğitment Programı</span>
                        </div>
                    </div>
                </div>

                <div className={styles.actionArea}>
                    <a href="/basvuru" className={styles.applyBtn}>
                        Şimdi Başvur
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
