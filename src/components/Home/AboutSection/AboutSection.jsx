"use client";

import Link from 'next/link';
import styles from './AboutSection.module.css';

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <div className={styles.imageColumn}>
                        {/* the user will set the actual image using their CDN */}
                        <img
                            src="https://cdn.e-adam.net/eadam-akademi/akademi-e%C4%9Fitmenler.png"
                            alt="Eğitmen Takımı"
                            className={styles.image}
                            onError={(e) => {
                                // Default fallback if image doesn't exist
                                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 500 500"><rect fill="%23edeff2" width="500" height="500"/><text fill="%239ca3af" font-family="sans-serif" font-size="24" dy="12" font-weight="bold" x="50%" y="50%" text-anchor="middle">Görsel (Örn: team.jpg)</text></svg>';
                            }}
                        />
                    </div>

                    <div className={styles.contentColumn}>
                        <h2 className={styles.title}>
                            Gücünü Kadınlardan Alan<br />
                            <span className={styles.highlight}>Dijital Eğitim Platformu</span>
                        </h2>

                        <h3 className={styles.subtitle}>Biz kimiz?</h3>

                        <p className={styles.description}>
                            Her biri kendi alanında uzman eğitmenlerden oluşan bir takımız.
                            Meta Business'tan Google Ads'e, SEO'dan CEO'ya kadar geniş bir
                            yelpazede eğitim veriyoruz.
                        </p>

                        <p className={styles.description}>
                            Bugünün değil yarının dünyasını hedefliyoruz. Dijitalde kaybolan
                            değil parlayan markalar yaratmak için bilgimizi paylaşıyoruz.
                        </p>

                        <Link href="/akademi-kesfet" className={styles.discoverBtn}>
                            Akademi'yi Keşfet
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
