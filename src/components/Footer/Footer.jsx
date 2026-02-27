import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <div className={styles.logo}>
              <span className={styles.logoText}>e-adam</span>
              <span className={styles.logoX}>X</span>
              <span className={styles.logoText}>akademi</span>
            </div>
            <p className={styles.description}>
              Türkiye'nin en kapsamlı dijital pazarlama ve sosyal medya akademisi.
              Uzmanlardan pratik odaklı eğitimler.
            </p>
            <div className={styles.socials}>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>Kurumsal</h3>
            <ul className={styles.links}>
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/kvkk">KVKK Aydınlatma Metni</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>Popüler Eğitimler</h3>
            <ul className={styles.links}>
              <li><Link href="/egitimler/google-ads">Google Ads Masterclass</Link></li>
              <li><Link href="/egitimler/seo">SEO Uzmanlığı</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>İletişim</h3>
            <ul className={styles.contactInfo}>
              <li>
                <Mail size={18} />
                <a href="mailto:info@e-adam.com">info@e-adam.com</a>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:08502592326">0850 259 23 26</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © 2025 E-Adam Akademi. Tüm hakları saklıdır.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
            <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
