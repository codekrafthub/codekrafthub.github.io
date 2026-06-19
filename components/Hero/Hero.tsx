'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
  onServicesClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onServicesClick, onContactClick }: HeroProps) {
  return (
    <section id="home" className={styles.hero}>
      {/* Decorative orbs */}
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className={styles.content}>
        <Link href="/ck-caet" className={styles.badgeLink}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Academic Training &amp; Placements? Visit CK-CAET &rarr;
          </div>
        </Link>

        <Image
          src="/codekraft_logo_white.png"
          alt="CodeKraft logo"
          width={96}
          height={96}
          className={styles.logo}
          priority
        />

        <h1 className={styles.title}>
          Code<span className={styles.accent}>Kraft</span>
        </h1>

        <p className={styles.tagline}>
          Tailored AI systems, business automation, and high-performance software solutions.
        </p>

        <div className={styles.ctas}>
          <button className={styles.btnPrimary} onClick={onServicesClick}>
            Explore Services
          </button>
          <button className={styles.btnOutline} onClick={onContactClick}>
            Get in Touch
          </button>
        </div>

        <div className={styles.stats}>
          {[
            { value: '20+', label: 'AI Projects' },
            { value: '99%', label: 'Automation Gain' },
            { value: '12+', label: 'Years Experience' },
          ].map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        <span />
      </div>
    </section>
  );
}
