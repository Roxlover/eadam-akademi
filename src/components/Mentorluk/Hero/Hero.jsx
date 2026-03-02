"use client";
import React from 'react';
import styles from './Hero.module.css';
import { ArrowRight, Play, Star, Video, ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                {/* Left Side: Content */}
                <div className={styles.contentWrapper}>
                    <div className={styles.tag}>
                        <span className={styles.tagDot}></span>
                        YENİ DÖNEM KAYITLARI BAŞLADI
                    </div>

                    <h1 className={styles.title}>
                        Kariyerinizde <br />
                        <span className={styles.highlight}>Devrim Yapın:</span><br />
                        Birebir Mentörlük
                    </h1>

                    <p className={styles.description}>
                        Kişiselleştirilmiş büyüme stratejileriyle potansiyelinizi açığa çıkarın. Size özel 1-on-1 seanslarla başarıya giden en kısa yolu keşfedin.
                    </p>

                    <div className={styles.buttonGroup}>
                        <button className={styles.primaryBtn}>
                            Hemen Başvur <ArrowRight size={20} />
                        </button>
                        <button className={styles.secondaryBtn}>
                            <div className={styles.iconCircle}>
                                <Play size={16} className={styles.playIcon} />
                            </div>
                            Tanıtımı İzle
                        </button>
                    </div>

                    <div className={styles.socialProof}>
                        <div className={styles.avatars}>
                            <img src="https://i.pravatar.cc/150?img=32" alt="Öğrenci" className={styles.avatar} />
                            <img src="https://i.pravatar.cc/150?img=33" alt="Öğrenci" className={styles.avatar} />
                            <img src="https://i.pravatar.cc/150?img=34" alt="Öğrenci" className={styles.avatar} />
                            <div className={styles.avatarCount}>+2k</div>
                        </div>
                        <div className={styles.ratingInfo}>
                            <div className={styles.stars}>
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <span className={styles.ratingScore}>4.9/5</span>
                            </div>
                            <span className={styles.ratingText}>Mutlu öğrenci ve mezun</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image/Visual */}
                <div className={styles.visualWrapper}>
                    <div className={styles.imageContainer}>
                        {/* the red badge */}
                        <div className={styles.urgentBadge}>
                            <span className={styles.urgentTextSmall}>ACELE ET</span>
                            <span className={styles.urgentTextLarge}>Sınırlı Kontenjan</span>
                        </div>

                        {/* main background placeholder img */}
                        <img
                            src="https://cdn.e-adam.net/eadam-akademi/mentorship.png"
                            alt="Mentörlük"
                            className={styles.mainImage}
                        />

                        {/* bottom glassmorphism card */}
                        <div className={styles.glassCard}>
                            <div className={styles.cardIconBox}>
                                <Video size={24} color="#1fe08b" />
                            </div>
                            <div className={styles.cardText}>
                                <h4>Size Özel 1-on-1 Seanslar</h4>
                                <p>Kariyerinizde hızla ilerlemenizi sağlıyoruz.</p>
                            </div>


                            <div className={styles.arrowTopRight}>
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className={styles.bgGlow}></div>
        </section>
    );
};

export default Hero;
