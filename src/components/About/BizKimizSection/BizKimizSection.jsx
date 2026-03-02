"use client";

import { useEffect, useState } from 'react';
import styles from './BizKimizSection.module.css';

const BizKimizSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simple intersection observer or timeout could trigger this
        // but for now, we'll trigger shortly after mount like Hero
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Side: Image */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://cdn.e-adam.net/eadam-akademi/d%C3%B6n%C3%BC%C5%9Ft%C3%BCyoruz.png"
                            alt="E-Adam Akademi Ekibi"
                            className={styles.image}
                            onError={(e) => {
                                e.target.src = 'https://cdn.e-adam.net/eadam-akademi/d%C3%B6n%C3%BC%C5%9Ft%C3%BCyoruz.png'; // fallback
                            }}
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className={styles.contentColumn}>
                    <div className={styles.tag}>
                        BİZ KİMİZ?
                    </div>

                    <h2 className={styles.title}>
                        2018'den beri<br />
                        <span className={`${styles.highlight} ${isLoaded ? styles.animateTextFillLTR : ''}`}>Dönüştürüyoruz</span>
                        <span className={styles.titleLine}></span>
                    </h2>

                    <div className={styles.descriptionBox}>
                        <p className={styles.description}>
                            E-Adam X Akademi, yüzlerce markalık saha tecrübesini dijital pazarlama ve yapay zekâ odaklı eğitimlerle birleştiren kapsamlı bir platformdur. Teorinin ötesinde, gerçek veriler ve performans odaklı stratejilerle katılımcılara pratik deneyim kazandırıyoruz.
                        </p>
                    </div>

                    <p className={styles.descriptionSecondary}>
                        Mentörlük ve uygulama destekli sürecimizle, kreatif üretimden reklam optimizasyonuna kadar tüm alanlarda sürdürülebilir bir öğrenme modeli sunuyoruz.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BizKimizSection;
