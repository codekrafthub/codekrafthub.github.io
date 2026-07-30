'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  onProgramsClick: () => void;
  onContactClick: () => void;
}


export default function Hero({ onProgramsClick, onContactClick }: HeroProps) {
  return (
    <section id="home" className={styles.hero}>

      {/* Full-bleed right-side image — sits behind the grid, visible through the right column */}
      <div className={styles.heroImageWrap} aria-hidden>
        <Image
          src="/ck_caet_hero_new.png"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
          priority
        />
        {/* Left-to-right gradient: white on left fades to transparent, exposing the image on the right */}
        <div className={styles.heroFade} />
        {/* Subtle dark vignette at very top/bottom edges */}
        <div className={styles.heroVignette} />
      </div>

      {/* Animated gradient blobs on the left (reinforce the white zone) */}
      <div className={styles.blob1} aria-hidden />
      <div className={styles.blob2} aria-hidden />

      {/* Content — left-aligned, sits over the white zone */}
      <div className={styles.inner}>
        <div className={styles.content}>


          <div className={styles.logoWrapper}>
            <Image
              src="/ck_caet_logo.png"
              alt="CK-CAET Logo"
              width={88}
              height={88}
              className={styles.logoImg}
              style={{ width: '88px', height: 'auto' }}
              priority
            />
          </div>

          <h1 className={styles.title}>
            Master the <br />
            <span className={styles.accent}>AI Revolution.</span>
          </h1>

          <p className={styles.sub}>
            CodeKraft Centre for AI &amp; Emerging Technologies
          </p>

          <p className={styles.tagline}>
            90% of technical roles are evolving through AI. Join the 10% who lead it. 
            Practical training on real production projects with 100% placement assistance.
          </p>

          <div className={styles.ctas}>
            <button className={styles.btnPrimary} onClick={onProgramsClick}>
              Explore Programs
            </button>
            <button className={styles.btnOutline} onClick={onContactClick}>
              Book Free Counselling
            </button>
          </div>

        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        <span />
      </div>
    </section>
  );
}
