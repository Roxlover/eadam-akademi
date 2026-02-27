"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <span className={styles.logoText}>e-adam</span>
                        <span className={styles.logoX}>X</span>
                        <span className={styles.logoText}>akademi</span>
                    </Link>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li><Link href="/mentorluk" onClick={toggleMenu}>Mentörlük</Link></li>
                        <li><Link href="/egitmenler" onClick={toggleMenu}>Eğitmenler</Link></li>
                        <li><Link href="/egitimler" onClick={toggleMenu}>Eğitimler</Link></li>
                        <li><Link href="/kurumsal" onClick={toggleMenu}>Kurumsal (Eğitim)</Link></li>
                        <li><Link href="/hakkimizda" onClick={toggleMenu}>Hakkımızda</Link></li>
                        <li><Link href="/iletisim" onClick={toggleMenu}>İletişim</Link></li>
                    </ul>

                    <div className={styles.mobileActions}>
                        <Link href="/giris" className={styles.loginBtn} onClick={toggleMenu}>Giriş Yap</Link>
                        <Link href="/kayit" className={styles.registerBtn} onClick={toggleMenu}>Kayıt Ol</Link>
                    </div>
                </nav>

                <div className={styles.desktopActions}>
                    <Link href="/giris" className={styles.loginBtn}>Giriş Yap</Link>
                    <Link href="/kayit" className={styles.registerBtn}>Kayıt Ol</Link>
                </div>

                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Menüyü Aç">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
