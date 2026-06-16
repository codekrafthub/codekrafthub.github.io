'use client';

import Image from 'next/image';
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
        <div className={styles.badge}>
          <span className={styles.dot} />
          Empowering India&apos;s Next Generation
        </div>

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
          Where code becomes craft and dreams become reality.<br />
          AI solutions &amp; industry-ready training for India&apos;s tech talent.
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
            { value: '500+', label: 'Students Trained' },
            { value: '20+', label: 'AI Projects' },
            { value: '5+', label: 'Years of Impact' },
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
