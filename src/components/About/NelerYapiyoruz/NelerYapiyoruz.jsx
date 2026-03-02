"use client";

import styles from './NelerYapiyoruz.module.css';
import { BookOpen, LayoutPanelLeft, Lightbulb, MessageSquareQuote } from 'lucide-react';

const NelerYapiyoruz = () => {
    const cards = [
        {
            id: 1,
            title: "Eğitimler Veriyoruz",
            description: "Gelişmenizi sağlayacak alanlarda eğitimler vererek kendinizi/işletmenizi büyütmeniz için yardımcı oluyoruz.",
            icon: <BookOpen size={24} strokeWidth={1.5} color="#10b981" />,
            accentClass: styles.accentGreen
        },
        {
            id: 2,
            title: "Panelleri Öğretiyoruz",
            description: "Gerekli ve ilgili panelleri öğrenmenizi sağlıyoruz.",
            icon: <LayoutPanelLeft size={24} strokeWidth={1.5} color="#f97316" />,
            accentClass: styles.accentOrange
        },
        {
            id: 3,
            title: "Soruları Cevaplıyoruz",
            description: "Nedir, ne değildir diyerek aklınıza takılan tüm soruları cevaplıyoruz.",
            icon: <Lightbulb size={24} strokeWidth={1.5} color="#a855f7" />,
            accentClass: styles.accentPurple
        },
        {
            id: 4,
            title: "İpuçları Veriyoruz",
            description: "Trendleri takip etmenizi sağlayacak trickler veriyoruz.",
            icon: <MessageSquareQuote size={24} strokeWidth={1.5} color="#3b82f6" />,
            accentClass: styles.accentBlue
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Neler Yapıyoruz</h2>
                    <p className={styles.subtitle}>
                        Bizi biz yapan ve her adımımızda bize rehberlik eden temel prensiplerimiz.
                    </p>
                </div>

                <div className={styles.grid}>
                    {cards.map((card) => (
                        <div key={card.id} className={styles.card}>
                            {/* Top right decorative glow */}
                            <div className={`${styles.glowAccent} ${card.accentClass}`}></div>

                            <div className={styles.iconWrapper}>
                                {card.icon}
                            </div>

                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NelerYapiyoruz;
