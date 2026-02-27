"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './StatisticsBanner.module.css';

const useCountUp = (end, duration = 2000) => {
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
            { threshold: 0.1 } // Start when 10% is visible
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
        const endValue = parseInt(end.toString().replace(/\D/g, ''), 10); // Extract number

        // Some stats have %, +, etc. We just animate the number part

        if (isNaN(endValue)) {
            setCount(end);
            return;
        }

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function (easeOutExpo)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(easeProgress * endValue));

            if (progress < 1) {
                window.requestAnimationFrame(animate);
            }
        };

        window.requestAnimationFrame(animate);
    }, [end, duration, hasStarted]);

    return { count, elementRef };
};

const StatItem = ({ label, value, prefix = "", suffix = "" }) => {
    const { count, elementRef } = useCountUp(value);

    return (
        <div className={styles.statItem} ref={elementRef}>
            <div className={styles.statValue}>
                {prefix}{count}{suffix}
            </div>
            <div className={styles.statLabel}>{label}</div>
        </div>
    );
};

const StatisticsBanner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <StatItem value="1000" suffix="+" label="MEZUN ÖĞRENCİ" />
                    <StatItem value="50" suffix="+" label="KURUMSAL İŞBİRLİĞİ" />
                    <StatItem value="95" prefix="%" label="İŞE YERLEŞME" />
                    <StatItem value="20" suffix="+" label="UZMAN EĞİTMEN" />
                </div>
            </div>
        </section>
    );
};

export default StatisticsBanner;
