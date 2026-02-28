"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Courses.module.css';

const coursesData = [
    {
        id: 1,
        title: "Meta Business",
        subtitle: "24 Saat İçerik • Canlı Destek",
        iconPath: "https://cdn.e-adam.net/eadam-akademi/meta.png", // Placeholder, you can use icon libraries or images
        bgColor: "#fdf8ee", // Light yellow/orange bg for icon
        link: "/egitimler/meta-business"
    },
    {
        id: 2,
        title: "Yapay Zeka Destekli Tasarım",
        subtitle: "24 Saat İçerik • Canlı Destek",
        iconPath: "https://cdn.e-adam.net/eadam-akademi/yz.png",
        bgColor: "#fdf8ee",
        link: "/egitimler/yapay-zeka-tasarim"
    },
    {
        id: 3,
        title: "Google Ads",
        subtitle: "18 Saat İçerik • 12 Örnek Uygulama",
        iconPath: "https://cdn.e-adam.net/eadam-akademi/google.png",
        bgColor: "#f0f4f8", // Light blue bg for icon
        link: "/egitimler/google-ads"
    },
    {
        id: 4,
        title: "GEO Eğitimi",
        subtitle: "18 Saat İçerik • 12 Örnek Uygulama",
        iconPath: "https://cdn.e-adam.net/eadam-akademi/geo.png",
        bgColor: "#fef4f4", // Light red bg for icon
        link: "/egitimler/geo-egitimi"
    },
    {
        id: 5,
        title: "SEO",
        subtitle: "15 Saat İçerik • Teknik Dokümantasyon",
        iconPath: "https://cdn.e-adam.net/eadam-akademi/seo.png",
        bgColor: "#eefaf6", // Light green bg for icon
        link: "/egitimler/seo"
    },
    {
        id: 6,
        title: "6. Eğitim",
        subtitle: "15 Saat İçerik • Teknik Dokümantasyon",
        iconPath: "https://cdn.e-adam.net/eadam-akademi/egitim.png",
        bgColor: "#eefaf6",
        link: "/egitimler/6-egitim" // Placeholder link
    }
];

const Courses = () => {
    return (
        <section className={styles.coursesSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>EĞİTİMLERİMİZ</h2>
                </div>

                <div className={styles.grid}>
                    {coursesData.map((course) => (
                        <div key={course.id} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div
                                    className={styles.iconContainer}
                                    style={{ backgroundColor: course.bgColor }}
                                >
                                    <img
                                        src={course.iconPath}
                                        alt={course.title}
                                        className={styles.icon}
                                        onError={(e) => {
                                            // Fallback if image not found
                                            e.target.style.display = 'none';
                                            e.target.parentNode.classList.add(styles.fallbackIcon);
                                        }}
                                    />
                                </div>
                                <div className={styles.textContainer}>
                                    <h3 className={styles.courseTitle}>{course.title}</h3>
                                    <p className={styles.courseSubtitle}>{course.subtitle}</p>
                                </div>
                            </div>
                            <Link href={course.link} className={styles.actionBtn}>
                                Eğitim Al
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
