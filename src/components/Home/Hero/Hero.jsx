"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 18,
        minutes: 56,
        seconds: 32
    });

    // Re-use logic for timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => time < 10 ? `0${time}` : time;

    return (
        <section className={styles.hero}>
            {/* Background Gradient Effect */}
            <div className={styles.bgGradient}></div>

            {/* Main Content Area */}
            <div className={styles.container}>

                {/* Central Timer Badge */}
                <div className={styles.badgeWrapper}>
                    <div className={styles.timerBadge}>
                        <span className={styles.dot}></span>
                        Eğitimlerin Bitmesine Son {timeLeft.days} Gün! | {formatTime(timeLeft.days)} : {formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}
                    </div>
                </div>

                {/* Headlines */}
                <h1 className={styles.headline}>
                    Mentörlük, Eğitim<br />
                    ve Uygulama<br />
                    <span className={styles.highlight}>TEK PAKETTE!</span>
                </h1>

                <p className={styles.description}>
                    Dijital dünyanın en kapsamlı eğitim platformu ile kariyerini bir üst seviyeye<br />
                    taşı. Uzman eğitmenlerden uygulamalı dersler ve birebir mentörlük.
                </p>

                {/* Action Buttons */}
                <div className={styles.actions}>
                    <Link href="/egitim-al" className={styles.primaryBtn}>
                        Eğitim Al
                    </Link>
                    <Link href="/programi-incele" className={styles.secondaryBtn}>
                        Programı İncele
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
