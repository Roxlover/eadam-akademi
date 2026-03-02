"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './Statistics.module.css';

const useCountUp = (end, isFloat = false, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime = null;
        const endValue = parseFloat(end);

        if (isNaN(endValue)) {
            setCount(end);
            return;
        }

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            let currentVal = easeProgress * endValue;

            if (isFloat) {
                setCount(currentVal.toFixed(1));
            } else {
                setCount(Math.floor(currentVal));
            }

            if (progress < 1) {
                window.requestAnimationFrame(animate);
            }
        };

        window.requestAnimationFrame(animate);
    }, [end, duration, hasStarted, isFloat]);

    return { count, elementRef };
};

const StatItem = ({ label, value, suffix = "", subLabel, isFloat = false, delayIndex = 0 }) => {
    const { count, elementRef } = useCountUp(value, isFloat);

    return (
        <div
            className={styles.statCard}
            ref={elementRef}
            style={{ animationDelay: `${delayIndex * 0.15}s` }}
        >
            <div className={styles.statValue}>
                {count}{suffix}
            </div>
            <div className={styles.statLabel}>{label}</div>
            <div className={styles.statSubLabel}>{subLabel}</div>
        </div>
    );
};

const Statistics = () => {
    return (
        <section className={styles.statisticsSection}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <StatItem
                        value="15"
                        suffix="+"
                        label="YILLIK DENEYİM"
                        subLabel="+20% Artış"
                        delayIndex={0}
                    />
                    <StatItem
                        value="100"
                        suffix="+"
                        label="AKTİF EĞİTİM"
                        subLabel="+15% Artış"
                        delayIndex={1}
                    />
                    <StatItem
                        value="50"
                        suffix="K+"
                        label="MEZUN ÖĞRENCİ"
                        subLabel="+40% Artış"
                        delayIndex={2}
                    />
                    <StatItem
                        value="4.9"
                        suffix="/5"
                        label="ÖĞRENCİ MEMNUNİYETİ"
                        subLabel="Mükemmel"
                        isFloat={true}
                        delayIndex={3}
                    />
                </div>
            </div>
        </section>
    );
};

export default Statistics;
