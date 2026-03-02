"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={`${styles.contentWrapper} ${isLoaded ? styles.animateFadeInUp : ''}`}>
                    <div className={styles.tag}>
                        <span className={styles.tagDot}></span>
                        SEKTÖR LİDERLERİ İLE TANIŞIN
                    </div>

                    <h1 className={styles.title}>
                        Alanında Uzman<br />
                        Eğitmenlerimiz<br />
                        <span className={styles.highlight}>Yanınızda!</span>
                    </h1>

                    <p className={styles.description}>
                        Sektörün öncü isimlerinden, deneyim odaklı ve interaktif eğitimlerle
                        kariyerinizi zirveye taşıyın. Türkiye'nin en kapsamlı dijital akademi kadrosuyla
                        profesyonel yolculuğunuza bugün başlayın.
                    </p>

                    <div className={styles.buttonGroup}>
                        <Link href="/egitimler" className={styles.primaryBtn}>
                            Eğitimleri Keşfet <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
