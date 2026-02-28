"use client";

import Image from 'next/image';
import styles from './Instructors.module.css';

const instructorsData = [
    {
        id: 1,
        name: "Mizgin Avşar",
        role: "Meta Business Eğitimi",
        bgColor: "#f4e8ff",
        image: "https://cdn.e-adam.net/eadam-akademi/mizgin.jpg"
    },
    {
        id: 2,
        name: "Aslı Sarı",
        role: "Google Ads Eğitimi",
        bgColor: "#eef8ff",
        image: "https://cdn.e-adam.net/eadam-akademi/asl%C4%B1.jpg"
    },
    {
        id: 3,
        name: "Tuğba Irmak",
        role: "GEO Eğitimi",
        bgColor: "#ffecec",
        image: "https://cdn.e-adam.net/eadam-akademi/tu%C4%9Fba.jpg"
    },
    {
        id: 4,
        name: "Dilruba Alioğlu",
        role: "SEO Eğitimi",
        bgColor: "#eaeeff",
        image: "https://cdn.e-adam.net/eadam-akademi/dilruba.jpg"
    },
    {
        id: 5,
        name: "İrem Salcı",
        role: "AI Destekli Tasarım Eğitmeni",
        bgColor: "#edfccb", // light lime
        image: "https://cdn.e-adam.net/eadam-akademi/irem.jpg"
    },
    {
        id: 6,
        name: "Nazlı Serbest",
        role: "AI Destekli Tasarım Eğitmeni",
        bgColor: "#eef8ff", // light blue
        image: "https://cdn.e-adam.net/eadam-akademi/nazl%C4%B1.jpg"
    }
];

const Instructors = () => {
    return (
        <section className={styles.instructorsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>EĞİTMENLERİMİZ</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.grid}>
                    {instructorsData.map((instructor) => (
                        <div
                            key={instructor.id}
                            className={styles.card}
                            style={{ backgroundColor: instructor.bgColor }}
                        >
                            <div className={styles.imageContainer}>
                                {/* Kullanıcı görselleri "public/images/instructors/" hedefine eklediğinde burası otomatik dolacaktır */}
                                {/* Şimdilik img etiketiyle bırakıyoruz, Image hata verebilir resimler yoksa */}
                                <img
                                    src={instructor.image}
                                    alt={instructor.name}
                                    className={styles.image}
                                    onError={(e) => {
                                        // Eğer resim bulunamazsa transparan bir kutu göster
                                        e.target.style.opacity = '0';
                                    }}
                                />
                            </div>

                            <div className={styles.infoWrapper}>
                                <div className={styles.infoOverlay}>
                                    <div className={styles.roleTag}>
                                        {instructor.role}
                                    </div>
                                    <h3 className={styles.name}>{instructor.name}</h3>
                                </div>

                                <div className={styles.hoverOverlay}>
                                    <button className={styles.purchaseBtn}>Eğitimi Satın Al</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructors;
