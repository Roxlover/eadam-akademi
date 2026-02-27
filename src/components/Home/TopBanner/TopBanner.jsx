"use client";

import { useState, useEffect } from 'react';
import styles from './TopBanner.module.css';
import { AlarmClock } from 'lucide-react';

const TopBanner = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 18,
        minutes: 56,
        seconds: 32
    });

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

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <AlarmClock size={16} className={styles.icon} />
                    <span className={styles.text}>Eğitimlerin Bitmesine Son {timeLeft.days} Gün!</span>
                </div>
                <div className={styles.timer}>
                    <span>{formatTime(timeLeft.days)}</span> :
                    <span>{formatTime(timeLeft.hours)}</span> :
                    <span>{formatTime(timeLeft.minutes)}</span> :
                    <span>{formatTime(timeLeft.seconds)}</span>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
