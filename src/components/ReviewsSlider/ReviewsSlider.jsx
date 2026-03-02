"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ReviewsSlider.module.css';

const reviews = [
    {
        id: 1,
        name: 'Asiye Yılmaz',
        role: 'CEO',
        quote: '"Akademi eğitimleri sayesinde ekibimiz çok şey öğrendi. Dijital reklamcılık artık bizim için çok daha kolay."',
        brand: 'Bambi',
        stars: 5,
        avatar: 'https://i.pravatar.cc/150?u=asiye'
    },
    {
        id: 2,
        name: 'Emre Can',
        role: 'Founder',
        quote: '"Eğitimler harika! Bence her markanın bu eğitimleri öğrenmesi gerekiyor. İşimiz çok kolaylaştı."',
        brand: 'SCOOTER',
        stars: 5,
        avatar: 'https://i.pravatar.cc/150?u=emre'
    },
    {
        id: 3,
        name: 'Sema Korkmaz',
        role: 'Marketing Lead',
        quote: '"İçerikler çok profesyonel ve güncel. Başka kaynak aramaya gerek kalmadı."',
        brand: 'PAULMARK',
        stars: 5,
        avatar: 'https://i.pravatar.cc/150?u=sema'
    },
    {
        id: 4,
        name: 'Mert Demir',
        role: 'Business Owner',
        quote: '"E-Adam Akademi ile satışlarımızı 3 katına çıkardık. Kesinlikle tavsiye ediyorum."',
        brand: 'DEMİR LTD',
        stars: 5,
        avatar: 'https://i.pravatar.cc/150?u=mert'
    }
];

const ReviewsSlider = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.tag}>REVIEWS</span>
                    <h2 className={styles.title}>ÖĞRENCİ YORUMLARI</h2>
                </div>

                <div className={styles.sliderWrapper}>
                    <div
                        className={styles.track}
                        style={{ transform: `translateX(calc(-${activeIndex * 33.333}% + 33.333%))` }}
                    >
                        {reviews.map((review, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <div
                                    key={review.id}
                                    className={`${styles.card} ${isActive ? styles.active : ''}`}
                                >
                                    <div className={styles.cardHeader}>
                                        <div className={styles.userInfo}>
                                            <div className={styles.avatarWrapper}>
                                                <img src={review.avatar} alt={review.name} className={styles.avatar} />
                                            </div>
                                            <div className={styles.userDetails}>
                                                <h4 className={styles.userName}>{review.name}</h4>
                                                <span className={styles.userRole}>{review.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.quote}>{review.quote}</p>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.brandName}>{review.brand}</span>
                                        <div className={styles.stars}>
                                            {[...Array(review.stars)].map((_, i) => (
                                                <Star key={i} size={14} fill="#FFB800" color="#FFB800" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.controls}>
                    <button onClick={prevSlide} className={styles.navBtn}>
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className={styles.navBtn}>
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSlider;
