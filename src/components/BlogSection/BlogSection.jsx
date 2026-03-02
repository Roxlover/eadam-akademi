import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './BlogSection.module.css';

const blogPosts = [
    {
        id: 1,
        date: '4 Ağustos 2023',
        title: 'Google Analytics GA4’te Oturum Süresi Nedir?',
        author: 'Melisa Mutlu',
        image: 'https://cdn.e-adam.net/eadam-akademi/086c711d8114b6179e7750474a80e5babfc56cd6.jpg',
    },
    {
        id: 2,
        date: '2 Ağustos 2023',
        title: 'Diğer Sorguların Değerinin Farkında Mısınız?',
        author: 'Yasin Keskin',
        image: 'https://cdn.e-adam.net/eadam-akademi/2cbb3a57f246b0c532d33ff729c07cb4ae404bca.jpg',
    },
    {
        id: 3,
        date: '30 Temmuz 2023',
        title: 'Meta’nın AI-Üretilmiş İçerik Etiketleme Sistemi',
        author: 'Buse Akkaya',
        image: 'https://cdn.e-adam.net/eadam-akademi/3f91cdac03a5b361fbfc20163545fce59114e21d.jpg',
    },
];

const BlogSection = () => {
    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>BLOG YAZILARI</h2>
                    <Link href="/blog" className={styles.viewAll}>
                        Tümünü Gör <ArrowRight size={16} />
                    </Link>
                </div>

                <div className={styles.grid}>
                    {blogPosts.map((post) => (
                        <div key={post.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.date}>{post.date}</span>
                                <h3 className={styles.title}>{post.title}</h3>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>
                                        {/* Placeholder for avatar as requested: 'sadece melisa mutlu yazması yeterli' */}
                                        <div className={styles.avatarCircle} />
                                        <span className={styles.authorName}>{post.author}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
