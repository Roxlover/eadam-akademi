import React from 'react';
import { PenTool, Award, Star, Infinity } from 'lucide-react';
import styles from './FeaturesGrid.module.css';

const features = [
    {
        id: 1,
        icon: <PenTool size={32} color="#F59E0B" />,
        title: 'Uygulamalı Eğitim',
        description: 'Platformlara özel uygulamalı eğitim videoları.',
        bgColor: 'rgba(245, 158, 11, 0.05)'
    },
    {
        id: 2,
        icon: <Award size={32} color="#6366F1" />,
        title: 'Garanti Eğitim',
        description: 'Öğrenme garantili profesyonel eğitimler.',
        bgColor: 'rgba(99, 102, 241, 0.05)'
    },
    {
        id: 3,
        icon: <Star size={32} color="#06B6D4" />,
        title: 'Sertifika',
        description: 'Size özel hazırlanan katılım sertifikası.',
        bgColor: 'rgba(6, 182, 212, 0.05)'
    },
    {
        id: 4,
        icon: <Infinity size={32} color="#EC4899" />,
        title: 'Ömür Boyu Erişim',
        description: 'Eğitim içeriklerine ömür boyu erişim.',
        bgColor: 'rgba(236, 72, 153, 0.05)'
    }
];

const FeaturesGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {features.map((feature) => (
                        <div key={feature.id} className={styles.card}>
                            <div className={styles.iconWrapper} style={{ backgroundColor: feature.bgColor }}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.description}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
