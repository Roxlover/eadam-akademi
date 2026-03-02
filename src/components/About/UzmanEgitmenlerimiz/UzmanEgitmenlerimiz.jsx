"use client";

import styles from './UzmanEgitmenlerimiz.module.css';
import { ArrowRight } from 'lucide-react';

const UzmanEgitmenlerimiz = () => {
    // 6 trainers as requested
    const team = [
        {
            id: 1,
            name: "Mizgin Avşar",
            role: "SEO & İçerik Uzmanı",
            image: "https://cdn.e-adam.net/eadam-akademi/mizgin-av%C5%9Far.png",
            imageHover: "https://cdn.e-adam.net/eadam-akademi/renkli-m.png",
            linkedin: "https://linkedin.com"
        },
        {
            id: 2,
            name: "Aslı Sarı",
            role: "Google Ads Eğitmeni",
            image: "https://cdn.e-adam.net/eadam-akademi/asl%C4%B1-sar%C4%B1.png",
            imageHover: "https://cdn.e-adam.net/eadam-akademi/renkli-a.png",
            linkedin: "https://linkedin.com"
        },
        {
            id: 3,
            name: "Dilruba Alioğlu",
            role: "SEO Eğitmeni",
            image: "https://cdn.e-adam.net/eadam-akademi/dilruba-alio%C4%9Flu.png",
            imageHover: "https://cdn.e-adam.net/eadam-akademi/renkli-d.png",
            linkedin: "https://linkedin.com"
        },
        {
            id: 4,
            name: "Tuğba Irmak",
            role: "GEO Eğitmeni",
            image: "https://cdn.e-adam.net/eadam-akademi/tuba-%C4%B1rmak.png",
            imageHover: "https://cdn.e-adam.net/eadam-akademi/renkli-t.png",
            linkedin: "https://linkedin.com"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerRow}>
                    <div className={styles.headerLeft}>
                        <span className={styles.tag}>TAKIMIMIZ</span>
                        <h2 className={styles.title}>Uzman Eğitmenlerimiz</h2>
                    </div>
                    <a href="/egitmenler" className={styles.viewAllLink}>
                        Tüm ekibi gör <ArrowRight size={20} />
                    </a>
                </div>

                <div className={styles.grid}>
                    {team.slice(0, 4).map((member) => (
                        <div key={member.id} className={styles.memberCard}>
                            <div className={styles.imageContainer}>
                                <div className={styles.imageBg}></div>
                                <div className={styles.imageInner}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={`${styles.image} ${styles.imageBW}`}
                                        onError={(e) => {
                                            // Fallback if real images aren't uploaded yet
                                            e.target.src = `https://i.pravatar.cc/300?img=${member.id + 10}`;
                                        }}
                                    />
                                    <img
                                        src={member.imageHover}
                                        alt={member.name}
                                        className={`${styles.image} ${styles.imageColor}`}
                                    />
                                </div>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinIcon}>
                                    <svg viewBox="0 0 24 24" fill="#0077b5" width="16" height="16">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                            <h3 className={styles.name}>{member.name}</h3>
                            <p className={styles.role}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UzmanEgitmenlerimiz;
