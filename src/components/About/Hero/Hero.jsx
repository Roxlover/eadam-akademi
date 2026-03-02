"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className={styles.heroSection}>
            <div className={styles.bgGlow}></div>
            <div className={styles.container}>
                <div className={styles.contentColumn}>
                    <div className={styles.tag}>
                        <span className={styles.tagDot}></span>
                        Geleceğin Dijital Liderleri
                    </div>

                    <h1 className={styles.title}>
                        Vizyonumuz:<br />
                        <span className={`${styles.highlight} ${isLoaded ? styles.animateTextFill : ''}`}>Dijitalde</span><br />
                        Güçlü<br />
                        <span className={`${styles.highlight} ${isLoaded ? styles.animateTextFill : ''}`}>Kadınlar</span>
                    </h1>

                    <p className={styles.description}>
                        Dijital pazarlama dünyasında kadınların liderliğini
                        güçlendirmek ve kariyerlerine yön vermek için
                        buradayız. Sadece eğitim değil, bir gelecek inşa
                        ediyoruz.
                    </p>

                    <div className={styles.buttonGroup}>
                        <Link href="/hikayemiz" className={styles.primaryBtn}>
                            Hikayemizi Keşfedin
                        </Link>
                        <Link href="/egitimler" className={styles.secondaryBtn}>
                            Eğitimleri İncele <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        {/* Main Image */}
                        <img
                            src="https://cdn.e-adam.net/eadam-akademi/e%C4%9Fitmenler-hakk%C4%B1m%C4%B1zda.png"
                            alt="E-Adam Akademi Takımı"
                            className={styles.mainImage}
                        />

                        {/* Top Right Floating Card - Satisfaction Rate */}
                        <div className={`${styles.floatingCard} ${styles.satisfactionCard} ${isLoaded ? styles.animateSlideInRight : ''}`}>
                            <span className={styles.greenDot}></span>
                            <span className={styles.satisfactionText}>98% Memnuniyet Oranı</span>
                        </div>

                        {/* Bottom Floating Card - Rating */}
                        <div className={`${styles.floatingCard} ${styles.ratingCard} ${isLoaded ? styles.animateSlideInLeft : ''}`}>
                            <div className={styles.avatars}>
                                <div className={styles.avatar}><img src="https://i.pravatar.cc/100?img=1" alt="User 1" /></div>
                                <div className={styles.avatar}><img src="https://i.pravatar.cc/100?img=5" alt="User 2" /></div>
                                <div className={styles.avatar}><img src="https://i.pravatar.cc/100?img=9" alt="User 3" /></div>
                                <div className={styles.avatarPlus}>+2k</div>
                            </div>
                            <div className={styles.ratingInfo}>
                                <span className={styles.ratingScore}>4.9/5 Puan</span>
                                <div className={styles.stars}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={14} className={styles.starIcon} fill="#facc15" stroke="none" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
