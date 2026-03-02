"use client";

import { useRef } from 'react';
import styles from './EgitmenlerList.module.css';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const EgitmenlerList = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    // Görseldeki eğitmen verileri
    const team = [
        {
            id: 1,
            name: "Mizgin Avşar",
            role: "Meta Business Eğitmeni",
            experience: "8+ Yıl Sektör Deneyimi",
            image: "https://cdn.e-adam.net/eadam-akademi/renkli-m.png"
        },
        {
            id: 2,
            name: "Aslı Sarı",
            role: "Google Ads Eğitmeni",
            experience: "8+ Yıl Sektör Deneyimi",
            image: "https://cdn.e-adam.net/eadam-akademi/renkli-a.png"
        },
        {
            id: 3,
            name: "Dilruba Alioğlu",
            role: "SEO Eğitmeni",
            experience: "4+ Yıl Sektör Deneyimi",
            image: "https://cdn.e-adam.net/eadam-akademi/renkli-d.png"
        },
        {
            id: 4,
            name: "İrem Salcı",
            role: "AI Destekli Tasarım Eğitmeni",
            experience: "3+ Yıl Sektör Deneyimi",
            image: "https://cdn.e-adam.net/eadam-akademi/renkli-i.png" // Placeholder or actual if exists
        },
        {
            id: 5,
            name: "Nazlı Serbest",
            role: "AI Destekli Tasarım Eğitmeni",
            experience: "3+ Yıl Sektör Deneyimi",
            image: "https://cdn.e-adam.net/eadam-akademi/renkli-n.png" // Placeholder or actual if exists
        },
        {
            id: 6,
            name: "Tuğba Irmak",
            role: "GEO Eğitmeni",
            experience: "4+ Yıl Sektör Deneyimi",
            image: "https://cdn.e-adam.net/eadam-akademi/renkli-t.png"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerRow}>
                    <div className={styles.headerTexts}>
                        <h2 className={styles.title}>Öne Çıkan Eğitmenlerimiz</h2>
                        <p className={styles.subtitle}>
                            Kendi alanlarında yılların deneyimine sahip, aktif projeler üreten ve
                            vizyoner profesyoneller.
                        </p>
                    </div>
                    <div className={styles.navigationControls}>
                        <button className={styles.navButton} onClick={scrollLeft} aria-label="Önceki">
                            <ChevronLeft size={20} />
                        </button>
                        <button className={styles.navButton} onClick={scrollRight} aria-label="Sonraki">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className={styles.gridContainer} ref={scrollContainerRef}>
                    <div className={styles.grid}>
                        {team.map((member) => (
                            <div key={member.id} className={styles.memberCard}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={styles.image}
                                        onError={(e) => {
                                            // Fallback if real images aren't uploaded yet
                                            e.target.src = `https://i.pravatar.cc/300?img=${member.id + 10}`;
                                        }}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.name}>{member.name}</h3>
                                    <p className={styles.role}>{member.role}</p>
                                    <p className={styles.experience}>{member.experience}</p>
                                    <button className={styles.purchaseBtn}>
                                        <ShoppingCart size={16} /> Eğitimi Satın Al
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.footerRow}>
                    <a href="/egitmenler" className={styles.viewAllBtn}>
                        Tüm Eğitmenleri Gör
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EgitmenlerList;
