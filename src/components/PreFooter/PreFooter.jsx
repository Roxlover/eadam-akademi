import React from 'react';
import Link from 'next/link';
import styles from './PreFooter.module.css';

const PreFooter = () => {
    return (
        <section className={styles.preFooter}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Buraya Kadar Geldiğine Göre...</h2>
                    <Link href="#" className={styles.button}>
                        Hemen Eğitim Al
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PreFooter;
