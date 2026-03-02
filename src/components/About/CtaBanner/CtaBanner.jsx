"use client";

import styles from './CtaBanner.module.css';
import { Rocket } from 'lucide-react';

const CtaBanner = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    {/* Left Side: Avatar with Badges */}
                    <div className={styles.avatarColumn}>
                        <div className={styles.avatarWrapper}>
                            {/* Decorative green circles mimicking the design behind the avatar */}
                            <div className={styles.avatarBgGlow}></div>
                            <img
                                src="https://cdn.e-adam.net/eadam-akademi/example.png"
                                alt="Student smiling"
                                className={styles.avatarImage}
                                onError={(e) => {
                                    e.target.src = "https://i.pravatar.cc/300?img=5";
                                }}
                            />

                            {/* Top left red badge */}
                            <div className={styles.badgeRed}>
                                SINIRLI KONTENJAN
                            </div>

                            {/* Bottom right green badge */}
                            <div className={styles.badgeGreen}>
                                <span className={styles.badgeDot}></span> Online
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content & Timer */}
                    <div className={styles.contentColumn}>
                        <h2 className={styles.title}>Kariyerinizi Bugün Değiştirin</h2>
                        <p className={styles.description}>
                            Hayalinizdeki kariyere giden yolda ilk adımı atmak için beklemeyin.
                            Kontenjanlarımız dolmadan yerinizi ayırtın.
                        </p>

                        {/* Countdown Timer */}
                        <div className={styles.timerBlock}>
                            <div className={styles.timeBox}>
                                <span className={styles.timeNumber}>02</span>
                                <span className={styles.timeLabel}>GÜN</span>
                            </div>
                            <div className={styles.timeBox}>
                                <span className={styles.timeNumber}>14</span>
                                <span className={styles.timeLabel}>SAAT</span>
                            </div>
                            <div className={styles.timeBox}>
                                <span className={styles.timeNumber}>35</span>
                                <span className={styles.timeLabel}>DAKİKA</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className={styles.buttonGroup}>
                            <button className={styles.btnPrimary}>
                                <Rocket size={20} /> Hemen Başvur
                            </button>
                            <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp}>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M12.002.002c-6.626 0-12 5.372-12 11.996 0 2.126.559 4.127 1.543 5.882L.031 23.969l6.23-1.636c1.724.897 3.684 1.401 5.741 1.401 6.626 0 12-5.374 12-11.998 0-6.626-5.374-12-12-12zm6.653 17.3c-.3.844-1.741 1.6-2.456 1.666-.66.061-1.393.208-4.576-1.11-3.83-1.588-6.297-5.518-6.486-5.772-.19-.253-1.55-2.062-1.55-3.929 0-1.868.973-2.793 1.319-3.178.347-.384.757-.48 1.01-.48.252 0 .504.004.723.013.232.012.544-.09.83.606.311.758 1.056 2.584 1.15 2.774.095.19.158.411.031.664-.126.253-.19.411-.38.632-.191.22-.399.489-.569.664-.19.19-.395.399-.17.778.225.38 1.002 1.65 2.152 2.678 1.488 1.33 2.73 1.745 3.109 1.936.379.19.6.158.82-.095.22-.252.946-1.106 1.2-1.485.253-.38.504-.316.852-.19.347.126 2.193 1.034 2.572 1.224.379.19.631.284.723.442.095.158.095.917-.205 1.761z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
