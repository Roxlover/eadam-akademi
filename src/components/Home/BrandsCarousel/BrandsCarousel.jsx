"use client";

import styles from './BrandsCarousel.module.css';

const BrandsCarousel = () => {
    // Array of your actual brand logos from CDN
    const brands = [
        { id: 1, name: "Mai Collection", logo: "https://cdn.e-adam.net/eadam-akademi/mai.png" }, // You can change these names as needed
        { id: 2, name: "Scooter", logo: "https://cdn.e-adam.net/eadam-akademi/scooter.png" },
        { id: 3, name: "Paulmark", logo: "https://cdn.e-adam.net/eadam-akademi/paulmark.png" },
        { id: 4, name: "Tiffany & Tomato", logo: "https://cdn.e-adam.net/eadam-akademi/tiffany.png" },
        { id: 5, name: "Bambi", logo: "https://cdn.e-adam.net/eadam-akademi/bambi.png" },
        { id: 6, name: "Up&Fit", logo: "https://cdn.e-adam.net/eadam-akademi/upfit.png" },
        { id: 7, name: "Nurgaz", logo: "https://cdn.e-adam.net/eadam-akademi/nurgaz.png" },
        { id: 8, name: "Beyyoglu", logo: "https://cdn.e-adam.net/eadam-akademi/beyyoglu.png" },
        { id: 9, name: "Peddon", logo: "https://cdn.e-adam.net/eadam-akademi/peddon.png" },
        { id: 10, name: "Woodizy", logo: "https://cdn.e-adam.net/eadam-akademi/woodizy.png" },
        { id: 11, name: "Sekeroglu", logo: "https://cdn.e-adam.net/eadam-akademi/sekeroglu.png" },
        { id: 12, name: "Loris", logo: "https://cdn.e-adam.net/eadam-akademi/loris.png" },
        { id: 13, name: "Hyman", logo: "https://cdn.e-adam.net/eadam-akademi/hyman.png" },
        { id: 14, name: "Jerf", logo: "https://cdn.e-adam.net/eadam-akademi/jerf.png" }
    ];

    // Split into two rows of 7 each
    const topRowBrands = brands.slice(0, 7);
    const bottomRowBrands = brands.slice(7, 14);

    // Duplicate both for seamless infinite scrolling
    const doubledTopRow = [...topRowBrands, ...topRowBrands];
    const doubledBottomRow = [...bottomRowBrands, ...bottomRowBrands];

    return (
        <section className={styles.brandsSection}>
            <div className={styles.container}>
                <h3 className={styles.subtitle}>+200 MARKA BİZİMLE ÇALIŞIYOR</h3>

                <div className={styles.carouselContainer}>
                    {/* Top Row - Scrolls Right */}
                    <div className={`${styles.carouselTrack} ${styles.scrollRight}`}>
                        {doubledTopRow.map((brand, index) => (
                            <div key={`top-${brand.id}-${index}`} className={styles.brandItem}>
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className={styles.brandLogo}
                                    onError={(e) => {
                                        e.target.style.opacity = '0.5';
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row - Scrolls Left */}
                    <div className={`${styles.carouselTrack} ${styles.scrollLeft}`}>
                        {doubledBottomRow.map((brand, index) => (
                            <div key={`bottom-${brand.id}-${index}`} className={styles.brandItem}>
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className={styles.brandLogo}
                                    onError={(e) => {
                                        e.target.style.opacity = '0.5';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsCarousel;
